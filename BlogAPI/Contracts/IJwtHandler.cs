using BlogAPI.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace BlogAPI.Contracts
{
    public interface IJwtHandler
    {
        JwtSecurityToken GenerateTokenOptions(SigningCredentials signingCredentials, List<Claim> claims);
        List<Claim> GetClaims(User user);
        SigningCredentials GetSigningCredentials();
    }
}