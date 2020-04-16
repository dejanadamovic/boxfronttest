using ServiceStack;

namespace Server
{
    public class Hello : IReturn<HelloResponse>
    {
        public string Name { get; set; }
    }

    public class HelloResponse
    {
        public string Result { get; set; }
    }

    public class MyServices : Service
    {
        public object Any(Hello request) => new HelloResponse { Result = $"Hi {request.Name} from server.dll" };        
    }
}