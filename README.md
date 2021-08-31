# ReactJS Trello Clone
<h4> Front-End Coding Challenge</h4>

Hi! It's just a basic clone of **Trello** written in React JS.
In continue you can read more about: **Installation Guide**, **Project Structure** , **Implemented Features**,  **Positive Points**, **Bugs to Resolve** and so on.


<h2>Installation</h2>
This application is written in **React JS** using **Typescript**. You can simply install it using bellow command:

`npm i`

**List of installed libraries:**

 - Core React and Typescript Packages
 - Styled-Component
 - React Router
 - Fontawesome
 - Node SASS
 - CLSX

<h2>Project Structure</h2>
Here you can check the project structure. In order to review main directories under source directory, i've just ignored other files and directories:

 - **views :** Each page has a specific view folder.
	 - Board: All about main board page implemented under *Board* component.
 - **components**:  List of main and global components needed across project implemented here in their directories.
	 - Icon
	 - Layout
	 - Flex
	 - Button
	 - Modal
	 - PopOver
	 - Private and Public Route
 - **assets**
	 - css
		 - normalize: *Some normalizers written in SASS to prevent browsers defaults*
 - **hooks**:
	 - useLocalStorage: *We use LocalStorage to store application state using this hook.*
	 - useOutsideClick: *In some parts we need to perform an action while clicking outside a referenced component.*
 - **utils**:
	 - functions: *Including some functions needed globally*
	 - styled.d.ts: *Here we define theme structure of Styled-Component*
	 - theme: *Current instance theme of above Styled-Component structure (Colors, BorderRadius, Spacing and ...)*

<h2>Features</h2>
As we forced to implement this application in few times, implemented features are shown in order to uncheck missed features. Bellow each item you can see current issues to be resolve in future:

 - [x] **Add New List**
	 - New list name is auto generated but it's better to get it from input like Trello before creation.
 - [x] **Edit List Title**
	 - List title currently is a textArea component at all and its better to change its component as user clicks and handle textArea height to be dynamic as words count.
 - [x] **Add New Card**
	 - It is better to automatically scroll down on long lists when user wants to add new card.
 - [x] **Edit Card Modal Init**
	 - We can add a transition to represent modal smoothly and not occasionally.
 - [x] **Change Card Title**
	 - Like list title, card title needs to have a dynamic height as characters count too.
 - [x] **Change Card Description**
	 - 	 It would be better to have a cancel button: When user wants to edit description, save a copy of current description at another state and if user clicked on cancel, set that copy as description.
 - [x] **Cards Movement among and in Lists**
	 - In more time, its needed to be implemented with drag-and-drop interaction with transitions.		
 - [x] **Common PopOver Component Under Members**
 - [ ] **Delete List**
 - [ ] **Delete Card**
 - [ ] **Add Members**
	 - We can implement its search using fuzzy search library or ... .
 - [ ] **Specify Due DateTime**
	 - 	We can simply use MomentJS for date time conversions and humanize in order to implement a calendar.
 - [ ] **Add and Manage CheckLists**
	 - Checkboxes can simply be implemented using a list of items with checkbox and a progress bar calculated as check list items status.
 - [ ] **Header Menus**
	 - We can use PopOver component to perform header menus, but we should care about its appearance in responsive sizes.

<h2>Positive Points</h2>

 - Using **Styled-Component** to reduce CSS first load size in order to improve portability and reusability of components. Global styles are implemented with CreateGlobalStyled of Styled-Component.
 - Using **Typescript** to increase readability and reduce possible future bugs in order to lots of positive points of TS which you know.
 - Implement padding and margins as inline to be suitable for **other languages** with change of page direction. You know that marginInline and paddingInline is not supported across all browsers so we've implemented a Mixin in our theme to make it universal.
 - **Project Structure** is arranged in a way to increase portability of components specifically when we are creating micro services.
 - Write **Hooks** to define global used functions with states.

<h2>Bugs/Negative Points to Resolve</h2>

 - **State Management** can be performed with internal React **Context** or other libraries like: **Redux**, **Recoil** and ... and it's not appropriate to pass onChanges nested and it causes lack of memory.
 - All inputs and one-line textareas should be submit with Enter key press according to **accessibility** which can be handled by event trigger on its onChange or putting it inside a form. In addition, each element should have an outline when user focuses on it.
 - **Testing** is an important part of each application and it's necessary. So we should provide testing with Jest or internal react testing library to ensure our component work with different test cases.
 - If we had APIs we could use **ReactQuery** with **Axios** for data fetching and caching and preventing additional renders and data fetches.
 - To prevent unneeded renders we could save our data as **Local Database** saved under local storage and **prevent using nested objects and arrays as states**. We could connect different data types like relational databases with unique ids for each data record.
 - Some components are heavy and huge and it's better to **divide components into smaller components**.
 - We should **commit (with good title) and push to Git each time a task is completed** or a bug is resolved including suitable note.

## Summary

Thank you for your invitation to this challenge. In challenges we can test ourselves to recognize that we proud ourselves honestly or not.

Trello has lots of features with its every single detail, but i've chosen to implement fewer but with the best quality according to time we had. Main Parts are implemented in 4hours and about 2-3 hours i was working to add transitions and qualifying each part and debug.

*Sajad Beheshti*
*beheshtisajad@gmail.com*