# bitBlog
Create in ReactJS

######Project BitBlog

######Components
#Header
#Footer
#Home Page
#Authors Page
#About Page

##Header
#Navigation for pages

##Footer
#Copyright

##Home Page
#Main component for linking posts wiht posts from various authors


##Authors Page
#List of Authors linking to a differnt authors

##About Page
#Abou BitBlog

#####Sub Pages

#Post page
#Author info page

##Post page
#Containing back button to Home Page
#Containing link to Author of a post
#Containing content from post that is linked from Home Page
#Containing links for three more post form same author

##Author info page
#Containing back button to Authors Page
#Containing picture, name and surname, username, email, phone of the author
#Containing adress and google map location of a author with street, city and zip code of the city
#Containing company info, name and adress of it


##bitBlg/
  #Home Page/
    Post page/
  #Authors Page/
    Author info page
  #About Page

  Structure of app/
  
    blog/
      README.md
      node_modules/
      package.json
      public/
        index.html
        favicon.ico
      src/
        app/
          App.js
          App.css
          partials/
            Header.js
            Footer.js
          homePage/
            HomePage.js
            PostList.js
          authorsPage/
            AuthorsPage.js
            PostContentComponent.js
            RelatedPostList.js
          about/
            AboutPage.js
            AuboutComponent.js
          postPage/
            Post.js
            PostHolder.js
            PostContent.js
            PostReletedLinks.js
          authorInfoPage/
            AuthorInfo.js
            AuthorInfoContent.js
          entities/
            Author.js
            Post.js
          services/
            Data.js
          shared/
            index.css
            index.js
