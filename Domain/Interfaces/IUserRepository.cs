using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IUserRepository
    {
        Task<User> AddUser(User user);
        Task<User> GetUser(string username);
        Task<bool> AnyUser(string username);
    }
}