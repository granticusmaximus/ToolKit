using System;
using System.Collections.Generic;
using System.Linq;
using WebAPI.DataAccess;
using WebAPI.Exceptions;

namespace WebAPI.Services
{
    public interface IPostService
    {
        IEnumerable<Post> GetAll();
        Post GetById(Post PostId);
        Post Create(Post PostId);
        void Update(Post PostId);
        void Delete(Post PostId);
    }

    public class PostService : IPostService
    {
        private ToolkitDbContext _context;

        public PostService(ToolkitDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Post> GetAll()
        {
            return _context.Posts;
        }

        public Post GetById(Post PostId)
        {
            return _context.Posts.Find(PostId);
        }

        public Post Create(Post post)
        {
            // validation
            if (_context.Posts.Any(x => x.PostId == post.PostId))
                throw new AppException("Post ID " + post.PostId + " is already in use");

            if (_context.Posts.Any(x => x.Title == post.Title))
                throw new AppException("Post Title " + post.Title + " is already in use");

            if (_context.Posts.Any(x => x.Content == post.Content))
                throw new AppException("Post Content " + post.Content + " is already in use");

            _context.Posts.Add(post);
            _context.SaveChanges();

            return post;
        }

        public void Update(Post postParam)
        {
            var post = _context.Posts.Find(postParam.PostId);

            if (post == null)
                throw new AppException("Post not found");

            if (postParam.PostId != post.PostId)
            {
                // id has changed, check to see if it has been taken already
                if (_context.Posts.Any(x => x.PostId == post.PostId))
                    throw new AppException("Post ID " + post.PostId + " is already in use");
            }

            if (postParam.Title != post.Title)
            {
                // title has changed, check to see if it has been taken already
                if (_context.Posts.Any(x => x.Title == post.Title))
                    throw new AppException(" Post Title " + post.Title + " is already in use");
            }

            if (postParam.Content != post.Content)
            {
                // title has changed, check to see if it has been taken already
                if (_context.Posts.Any(x => x.Content == post.Content))
                    throw new AppException(" Post Title " + post.Content + " is already in use");
            }

            // update client properties
            post.PostId = postParam.PostId;
            postParam.Title = post.Title;
            postParam.Content = post.Content;

            _context.Posts.Update(post);
            _context.SaveChanges();

        }

        public void Delete(Post PostId)
        {
            var post = _context.Posts.Find(PostId);
            if (post != null)
            {
                _context.Posts.Remove(post);
                _context.SaveChanges();
            }
        }
    }
}
