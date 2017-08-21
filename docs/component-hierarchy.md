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
- BoardDetail

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
  + FollowersIndexItem
- FollowingIndex (includes people, boards, and topics)
  + FollowingPeopleIndex
    + FollowingPeopleIndexItem
  + FollowingBoardIndex
    + FollowingBoardIndexItem
  + FollowingTopicIndex
    + FollowingTopicIndexItem
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
