using System.Linq;
using Microsoft.EntityFrameworkCore;
using JAModel;

namespace JAConsoleDL;

public class EFRepo : IRepo
{
    private readonly Context _context;
    public EFRepo(Context context)
    {
        _context = context;
    }
    public async Task<List<users>> GetAllUsersAsync()
    {
        return await _context.users.ToListAsync();
    }

    public Task AddOrderItemAsync()
    {
        throw new NotImplementedException();
    }

    public Task ChangePriceAsync(JAModel.ShopItem _item, float _price, int storeID)
    {
        throw new NotImplementedException();
    }

    public Task ChangeStoreAsync(int _newID, JAModel.UserPass _currentUser)
    {
        throw new NotImplementedException();
    }

    public Task<Dictionary<int, string>> CheckOrderHistoryAsync(int _select, int _userID)
    {
        throw new NotImplementedException();
    }

    public Task<Dictionary<int, string>> CheckOrderHistoryAsyncAdmin(int _select, int _storeID)
    {
        throw new NotImplementedException();
    }

    public Task ConfirmOrderAsync(Dictionary<int, List<JAModel.ShopItem>> Order)
    {
        throw new NotImplementedException();
    }

    public Task CreateNewAdminAsync(JAModel.UserPass _newAdmin)
    {
        throw new NotImplementedException();
    }

    public Task CreateNewFoodItemAsync(JAModel.ShopItem _shopItem)
    {
        throw new NotImplementedException();
    }



    public Task CreateNewUserAsync(JAModel.UserPass _newUser)
    {
        throw new NotImplementedException();
    }

    public Task CreateOrderAsync(int userID)
    {
        throw new NotImplementedException();
    }

    public Task<List<JAModel.UserPass>> GetAllAdminsAsync()
    {
        throw new NotImplementedException();
    }



    public Task<int> GetCartID(int userID)
    {
        throw new NotImplementedException();
    }

    public Task<List<JAModel.ShopItem>> GetFoodInventoryAsync()
    {
        throw new NotImplementedException();
    }

    public Task<List<JAModel.ShopItem>> GetStoreInventoryAsync(int _storeID)
    {
        throw new NotImplementedException();
    }

    public Task<string> GetStoreNameAsync(int userID)
    {
        throw new NotImplementedException();
    }

    public Task RemoveItemAsync(JAModel.ShopItem _item, int storeID)
    {
        throw new NotImplementedException();
    }

    public Task RemoveOrderAsync()
    {
        throw new NotImplementedException();
    }

    public Task RemoveOrderItemAsync(int _itemID, int _userID)
    {
        throw new NotImplementedException();
    }

    public Task SaveAdminsAsync()
    {
        throw new NotImplementedException();
    }

    public Task SaveFoodInventoryAsync()
    {
        throw new NotImplementedException();
    }

    public Task SaveOrderAsync(JAModel.OrderInstance _instance)
    {
        throw new NotImplementedException();
    }

    public Task<Dictionary<int, List<JAModel.ShopItem>>> SearchForOrderAsync(int userID)
    {
        throw new NotImplementedException();
    }

    public Task<JAModel.ShopItem> SearchInventoryAsync(string itemName, int storeID)
    {
        throw new NotImplementedException();
    }

    public Task UpdateFoodItemAsync(JAModel.ShopItem _item)
    {
        throw new NotImplementedException();
    }
} 