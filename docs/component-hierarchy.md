## Component Hierarchy

**AuthFormContainer**
- AuthForm
  + SignUpForm
  + LoginForm

**NavContainer**

**HomeContainer**

**FeedContainer**
- FeedPins

**PinContainer**
- PinIndex
  + PinIndexItem
- PinDetail
  + PinTools

**NewPinContainer**
- NewPinButton
  + NewPinForm
  + (Note: there are uploads from user's local database or uploads from a URL, may have to use separate form components)

**CommentContainer**
- CommentIndex
  + CommentIndexItem

**TopicContainer (aka Tags)**
- TopicIndex
  + TopicIndexItem

**DiscoverContainer**
- DiscoverPins

**BoardContainer**
- BoardTools
- BoardIndex
  + BoardIndexItem

**NewBoardContainer**
- NewBoardForm
- NewBoardButton  

**UserContainer**
- UserOptions
- UserIndex (for list of contributors to a board)
  + UserIndexItem
- UserDetail
  + UserDetailTools

**FollowsContainer (may need to split to followers and following, based on routes)**
- FollowersIndex
- FollowingIndex (includes people, boards, and topics)
----
----

## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/user/:userId" | "UserContainer" |
| "/pin/:pinId" | "PinContainer" |
| "/board/:username/:boardName" | "BoardContainer" |
| "/topics/:topicName" | "TopicContainer" |
| "/new-pin" | "NewPinContainer" |
| "/new-board" | "NewBoardContainer" |
| "/discover" | "DiscoverContainer" |
| "/:username/:followers" | "FollowsContainer" |
| "/:username/:following" | "FollowsContainer" |
