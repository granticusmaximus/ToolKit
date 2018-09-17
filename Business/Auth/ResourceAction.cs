using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Auth
{
    public class ResourceAction
    {
        public string Resource;
        public string Action;

        /// Checks if the current instance is equal to the given object by comparing the resource and action values
        /// <param name="obj">object to compare to</param>
        /// <returns>True if equal, else false.</returns>
        public override bool Equals(object obj)
        {
            ResourceAction ra = obj as ResourceAction;
            if (ra != null)
            {
                return ((string.Compare(ra.Resource, Resource, true) == 0) && (string.Compare(ra.Action, Action, true) == 0));
            }
            return base.Equals(obj);
        }

        /// Gets the hash code.
        /// <returns>The hash code.</returns>
        public override int GetHashCode()
        {
            return (Resource + Action).ToLower().GetHashCode();
        }

        /// Creates an instance of ResourceAction class.
        /// <param name="resource">The resource name.</param>
        /// <param name="action">The action.</param>
        /// <exception cref="ArgumentNullException">when <paramref name="resource"/> is null</exception>
        public ResourceAction(string resource, string action)
        {
            if (string.IsNullOrEmpty(resource))
            {
                throw new ArgumentNullException("resource");
            }
            Resource = resource;
            Action = action;
        }
    }
}
