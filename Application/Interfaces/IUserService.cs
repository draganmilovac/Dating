using System.Threading.Tasks;
using Domain;

namespace Application.Interfaces
{
    public interface IUserService
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);
        Task<bool> UserExist(string username);
    }
}