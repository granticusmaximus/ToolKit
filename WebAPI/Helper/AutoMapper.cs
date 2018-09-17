using System;
using AutoMapper;
using Business.Entities;
using Business.Models.DTO;

namespace WebAPI.Helper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDto>();
            CreateMap<UserDto, User>();
        }
    }
}
