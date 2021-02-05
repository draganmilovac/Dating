using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using Domain.Interfaces;

namespace Application.Services
{
    public class DatingService : IDatingService
    {
        private readonly IDatingRepository datingRepository;

        public DatingService(IDatingRepository datingRepository)
        {
            this.datingRepository = datingRepository;
        }
        public void Add<T>(T entity) where T : class
        {
            datingRepository.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            datingRepository.Delete(entity);
        }

        public async Task<User> GetUser(int id)
        {
            return await datingRepository.GetUser(id);
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            return await datingRepository.GetUsers();
        }

        public async Task<bool> SaveAll()
        {
            return await datingRepository.SaveAll();
        }
    }
}