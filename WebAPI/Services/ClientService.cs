using System;
using System.Collections.Generic;
using System.Linq;
using WebAPI.DataAccess;
using WebAPI.Exceptions;

namespace WebAPI.Services
{

    public interface IClientService
    {
        IEnumerable<Client> GetAll();
        Client GetById(Client ClientID);
        Client Create(Client ClientID);
        void Update(Client ClientID);
        void Delete(Client ClientID);
    }

    public class ClientService : IClientService
    {
        private ToolkitDbContext _context;

        public ClientService(ToolkitDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Client> GetAll()
        {
            return _context.Clients;
        }

        public Client GetById(Client ClientID)
        {
            return _context.Clients.Find(ClientID);
        }

        public Client Create(Client client)
        {
            // validation
            if (_context.Clients.Any(x => x.BusinessName == client.BusinessName))
                throw new AppException("Business Name " + client.BusinessName + " is already in use");

            // validation
            if (_context.Clients.Any(x => x.ClientID == client.ClientID))
                throw new AppException("Client Ide " + client.ClientID + " is already in use");

            _context.Clients.Add(client);
            _context.SaveChanges();

            return client;
        }

        public void Update(Client clientParam)
        {
            var client = _context.Clients.Find(clientParam.ClientID);

            if (client == null)
                throw new AppException("Client not found");

            if (clientParam.BusinessName != client.BusinessName)
            {
                // username has changed so check if the new username is already taken
                if (_context.Clients.Any(x => x.BusinessName == clientParam.BusinessName))
                    throw new AppException("Business Name " + clientParam.BusinessName + " is already in use");
            }

            if (clientParam.ClientID != client.ClientID)
            {
                // username has changed so check if the new username is already taken
                if (_context.Clients.Any(x => x.ClientID == clientParam.ClientID))
                    throw new AppException("Client ID " + clientParam.ClientID + " is already in use");
            }

            // update client properties
            client.ClientID = clientParam.ClientID;
            client.BusinessName = clientParam.BusinessName;
            client.Address = clientParam.Address;
            client.City = clientParam.City;
            client.State = clientParam.State;
            client.Zip = clientParam.Zip;
            client.POCemail = clientParam.POCemail;
            client.POCname = clientParam.POCname;
            client.POCphone = clientParam.POCphone;
            client.Notes = clientParam.Notes;

            _context.Clients.Update(client);
            _context.SaveChanges();

        }

        public void Delete(Client ClientID)
        {
            var client = _context.Clients.Find(ClientID);
            if (client != null)
            {
                _context.Clients.Remove(client);
                _context.SaveChanges();
            }
        }

    }
}
