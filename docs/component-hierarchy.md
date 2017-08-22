## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**NavBarContainer**
 - NavBar

**StreamContainer**
 - StreamIndex
  + StreamIndexItem
 - WhoToFollow


**FooterPlayerContainer**
 - FooterPlayer

**ArtistShowContainer**
 - ArtishShowContainer
  + Artist Show

**TabContainer**
 - Tab Component

**Follows Container**
 - Follows Component
 - Follows Button

**SongShowContainer**
 - SongShow

**CommentFormContainer**
 - CommentForm

**CommentIndexContainer**
 - CommentIndex
  + CommentIndexItem

**UploadFormContainer**
 - UploadForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/stream" | "StreamContainer" |
| "/:username" | "ArtishShowContainer" |
| "/:username/:song.name" | "SongShowContainer" |
| "/upload" | "UploadContainer" |
| "/"  | "Login or Homepage depending on current user"
