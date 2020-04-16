using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using ServiceStack;

namespace Server
{
    public class ServerPlugin : IPlugin, IStartup
    {        
        public void Configure(IApplicationBuilder app) { }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            //services.AddSingleton(new StartupDep());
            return null;
        }

        public void Register(IAppHost appHost)
        {
        }
    }        
}
