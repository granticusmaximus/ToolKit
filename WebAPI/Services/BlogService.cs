using System;
using System.Collections.Generic;
using System.Linq;
using WebAPI.DataAccess;
using WebAPI.Exceptions;

namespace WebAPI.Services
{
    public interface IBlogService
    {
        //CRUD Functions for Posts
        IEnumerable<Post> GetAllPosts();
        Post GetPostById(Post PostId);
        Post CreatePost(Post PostId);
        void UpdatePost(Post PostId);
        void DeletePost(Post PostId);

        //CRUD Functions for Blogse
        Blog GetBlogById(Blog BlogId);
        Blog CreateBlog(Blog BlogId);
        void UpdateBlog(Blog BlogId);
        void DeleteBlog(Blog BlogId);
    }

    public class BlogService : IBlogService
    {
        private BloggingContext _context;

        public BlogService(BloggingContext context)
        {
            _context = context;
        }

        public IEnumerable<Post> GetAllPosts()
        {
            return _context.Posts;
        }

        public IEnumerable<Blog> GetAllBlogs()
        {
            return _context.Blogs;
        }

        public Post GetPostById(Post PostId)
        {
            return _context.Posts.Find(PostId);
        }

        #region Post Specific Functions
        public Post CreatePost(Post post)
        {
            // validation
            if (_context.Posts.Any(x => x.Title == post.Title))
                throw new AppException("Business Name " + post.Title + " is already in use");

            // validation
            if (_context.Posts.Any(x => x.PostId == post.PostId))
                throw new AppException("Post ID " + post.PostId + " is already in use");

            _context.Posts.Add(post);
            _context.SaveChanges();

            return post;
        }

        public void UpdatePost(Post postParam)
        {
            var post = _context.Posts.Find(postParam.PostId);

            if (post == null)
                throw new AppException("Post not found");

            if (postParam.Title != post.Title)
            {
                // username has changed so check if the new username is already taken
                if (_context.Posts.Any(x => x.Title == postParam.Title))
                    throw new AppException("Post Title " + postParam.Title + " is already in use");
            }

            if (postParam.PostId != post.PostId)
            {
                // username has changed so check if the new username is already taken
                if (_context.Posts.Any(x => x.PostId == postParam.PostId))
                    throw new AppException("Post ID " + postParam.PostId + " is already in use");
            }

            // update client properties
            post.PostId = postParam.PostId;
            post.Blog = postParam.Blog;
            post.BlogId = postParam.BlogId;
            post.Content = postParam.Content;
            post.Title = postParam.Title;

            _context.Posts.Update(post);
            _context.SaveChanges();

        }

        public void DeletePost(Post PostId)
        {
            var post = _context.Posts.Find(PostId);
            if (post != null)
            {
                _context.Posts.Remove(post);
                _context.SaveChanges();
            }
        }
        #endregion

        #region Blog Specific Functions
        public Blog GetBlogById(Blog BlogId)
        {
            return _context.Blogs.Find(BlogId);
        }


        public Blog CreateBlog(Blog blog)
        {
            // validation
            if (_context.Blogs.Any(x => x.BlogName == blog.BlogName))
                throw new AppException("Blog Name " + blog.BlogName + " is already in use");

            // validation
            if (_context.Blogs.Any(x => x.BlogId == blog.BlogId))
                throw new AppException("Blog ID " + blog.BlogId + " is already in use");

            _context.Blogs.Add(blog);
            _context.SaveChanges();

            return blog;
        }

        public void UpdateBlog(Blog blogParam)
        {
            var blog = _context.Blogs.Find(blogParam.BlogId);

            if (blog == null)
                throw new AppException("Post not found");

            if (blogParam.BlogName != blog.BlogName)
            {
                // username has changed so check if the new username is already taken
                if (_context.Blogs.Any(x => x.BlogName == blogParam.BlogName))
                    throw new AppException("Blog Name " + blogParam.BlogName + " is already in use");
            }

            // update client properties
            blog.BlogId = blogParam.BlogId;;

            _context.Blogs.Update(blog);
            _context.SaveChanges();

        }

        public void DeleteBlog(Blog BlogId)
        {
            var blog = _context.Blogs.Find(BlogId);
            if (blog != null)
            {
                _context.Blogs.Remove(blog);
                _context.SaveChanges();
            }
        }
        #endregion
    }
}
