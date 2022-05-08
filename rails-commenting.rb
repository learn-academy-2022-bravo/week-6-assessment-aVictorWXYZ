# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) BlogPostsController has a inheritance relationshipa as the child class to ApplicationController the parent class
class BlogPostsController < ApplicationController

  def index
    # ---2) Within the method index a instance variable is being made to hold all of the BlogPost table information
    @posts = BlogPost.all
  end

  # ---3) The method show is being defined with an instanced variable holding specific BlogPost information depending on params inputs
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The method new is being created holding an instanced variable that will create a new object within BlogPost
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) the instanced variable will take in what is put in the blog_post_params and use it to create and save it to the database and if its valid it will redirect accordingly
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)the instanced variable looks for a params id within the BlogPost
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)Using the information pulled from params it will update it and redirect if accordingly
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)It will redirect to itself if it has failed to destroy itself?
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) creates a seperation for any code below private becomes restricted to be used within this file. there is no chance they can be called somewhere else in the program.
  private
  def blog_post_params
    # ---10)Establishes the Table ":blog_post" as the only place information can go and ":title, :content" as the only columns that can be changed within the Table.
    params.require(:blog_post).permit(:title, :content)
  end
end
