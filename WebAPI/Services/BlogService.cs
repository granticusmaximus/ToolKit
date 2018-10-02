using System;
using System.Collections.Generic;
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

        public Post GetPostById(Post PostId)
        {
            return _context.Posts.Find(PostId);
        }

        #region Post Specific Functions
        public Post Create(Post post)
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

        public void Update(Post postParam)
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
        #endregion
    }
}
