export const getTokenBalances = async (walletAddress: string, chainId: number) => {
    const url = `https://api.covalenthq.com/v1/${chainId}/address/${walletAddress}/balances_v2/?key=ckey_demo`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data || data.error) {
        throw new Error(data.error_message || 'Failed to fetch balances');
    }

    return data.data.items.filter((item: any) => item.balance !== "0");
};