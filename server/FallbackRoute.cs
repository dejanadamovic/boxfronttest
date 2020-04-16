using ServiceStack;
using ServiceStack.DataAnnotations;

namespace Server
{
    [Exclude(Feature.Metadata)]
    [FallbackRoute("/{PathInfo*}", Matches="AcceptsHtml")]
    public class FallbackForClientRoutes
    {
        public string PathInfo { get; set; }
    }

    public class FallbackService: Service
    {
        public object Any(FallbackForClientRoutes request) => Request.GetPageResult("/");
    }
}
