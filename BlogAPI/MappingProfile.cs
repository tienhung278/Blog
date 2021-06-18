using AutoMapper;
using BlogAPI.DTOs;
using BlogAPI.Entities;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace BlogAPI
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<string, DateTime>().ConvertUsing(text => DateTime.Parse(text, new CultureInfo("vi-VN")));
            CreateMap<DateTime, string>().ConvertUsing(date => date.ToString("dd/MM/yyyy"));
            CreateMap<Post, PostRead>();
            CreateMap<PostWrite, Post>();
        }
    }
}
