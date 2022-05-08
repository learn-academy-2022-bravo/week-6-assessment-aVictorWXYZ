# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: 
  Start by adding belongs_to under the model Students file. 
  You would want to create a new timestamped migrations file. 
  Edit new migration file adding a column for the foreign key (Cohortid) set to recieve integers.
  rails db:migrate to move the new migrations file to the schema.
  I believe another step is involved but without working it out I don't know what I am missing.

  Researched answer:
  create model student if it hasn't been done yet
  add column cohort_id accepting integers has to be added to the model
   in  both models we need to modive them with belongs_to :cohort and has_many :students
foreign key would be in the belongs to model so students in this case


2. Which RESTful routes must always be passed params? Why?

  Your answer: Oh god, good question. 

  Researched answer: I had nothing to answer before reading and re watching the videos. I still don't know... Is the answer none? If you setup everything and have no routs setup it will still show the Rails page. Meaning its not broken. If you want something specific then the requirements would change depending on that.



3. Name three rails generator commands. What is created by each?

  Your answer: 
  model sets up a model for a table on your db. 
  resource sets up a model/table with the needed routs. 
  db:create sets up behind the scenes allowing for database processes.

  Researched answer:
  model       : creates a model this is used for managing the rules of interaction with a database table.
  db:create   : create an empty database for you. 
  scaffold    : a full set of model, database migration for that model, controller to manipulate it,



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

Your answer: I'm unfamiliar with control methods

Researched answer:


action: "GET"    location: /students          

action: "POST"   location: /students       

action: "GET"    location: /students/new

action: "GET"    location: /students/2  

action: "GET"    location: /students/2/edit    

action: "PATCH"  location: /students/2      

action: "DELETE" location: /students/2      



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

User can create a new list 

User can see and open any created list list

User can add things to any to-do list

User can edit prior things added on any to-do list or the list itself

User can mark to-do list items as done

User can see any to-do list items marked as done 

User can restore any done to-do list items

User can remove any prior things added to any list or any entire to-do list

User can see any removed items or entire to-do list

User can restore any removed items or entire to-do list

User can check out any time they like. But they can never leave!
