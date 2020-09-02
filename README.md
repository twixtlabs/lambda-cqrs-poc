# Warning
> Package is an experiment for rudimentary serverless implementation of the CQRS
>architectural style primarily using Lambda and DynamoDB.

# Goals
- Lambda functions for handling commands and events.
- State-stored aggregates
- _Stretch:_ Event sourced aggregates
- DynamoDB for persistence (state-stored aggregates and events)
- Subscribing Event Processors
- _Stretch_: Tracking event processor
- Base classes for Command Handling and Query Handling.
- Annotation(Decorator) based validation of command payloads (class-validator)



#Messages

We use the term _Message_ describe the DTOs that carry payloads (commands/events). Lambdas are 
invoked/receive "Messages". While the accurate / technical term is "event", this would lead to ambiguity given the 
term "event" has another meaning in this context already.

_Message_ seems like an appropriate term as it does not imply Sync or Async  handling.
##Commands
Commands are dispatched as a payload within a _GenericCommandMessage_.
##Events
###"Domain" Events
We use the term _Domain Event_ for the events that can be emitted as a result of command processing. This is to remain
consistent with common terminology. As a technical implementation matter, these _Domain Events_ generally do not exist
_as is_ outside of the Bounded Context. The decision and responsibility to publish events outside of the context  for the
rest of the Domain belongs to the context. These _Domain Events_ are not _defacto_ published to the rest of the domain.

Domain Events should be dispatched as a payload within a _GenericDomainEventMessage_
###Event Processing
_Subscribing Event Processors_ subscribe themselves to a source of Events and are invoked (logically) by the "publishing"
mechanism. In this PoC, DynamoDB Streams plays the role of Subscribing Event Processor, there is no actual function code
involved. Event Handlers (implemented is Lambda Functions) subscribe to a stream on the events table and the invocation
of handlers is taken care of for us.

There is however no routing/filtering involved in this approach, handlers will receive all events, and must determine what 
action to take. Routing/filtering could be implemented using an intermediary Lambda function that delivers the events to
an SNS Topic, SQS Queue etc, that the handler Lambdas could subscribe to / be triggered by, however that is beyond
the scope of this initial Proof of Concept.

Of interest:
> - ordering of events in DynamoDB stream is guaranteed within *each shard*.
> - Shards scale with partitions, _typically*_ all items for a given key (the collection) 
> are in a single partition
> - DynamoDB stream entries are removed/expire after 24 hours. If you need more the same 
> approach can be implemented with Kinesis which can hold entries for up to 7 days.

#Lambda Functions
##Dispatcher
_Dispatcher_ is an implementation of the front controller pattern, similar to how many popular web frameworks operate.
The dispatcher is responsible for routing a _Message_ to appropriate controller. Its implementation is fairly simplistic,
it will route the message to the first controller in a list (constructor arg) that can handle the message.

Using the dispatcher your function _can_ handle more than one type of message+payload combination. Whether it should or 
not is left up to the implementor.

When implementing your Lambda functions to handle commands/events, your handler function should instantiate the dispatcher
and call ```doDispatch()```.

##Controllers
###Command Controllers
Controllers for handling commands should extend ```AbstractCommandController``` and implement the ```execute()``` method.

The ```AbstractCommandController``` provides a default implementation of ```handleMessage``` that 
validates the payload within the message using the _class-validator_ package.

The ```AbstractCommandController``` provides a default implementation of the ```canHandle()``` method using a command name supplied
to the constructor and evaluating it against the commandName in the containing message.

It declares no-op ```preExecutue``` and ```postExecute``` methods that can be overridden in specific command controller implementations.


 

