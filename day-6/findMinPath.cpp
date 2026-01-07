#include <bits/stdc++.h>
using namespace std;

int dp[100][100];

int findMinPath(vector<vector<int>> &V, int r, int c) {
    int R = V.size();
    int C = V[0].size();

    if (r >= R || c >= C) return 100000000;
    if (r == R - 1 && c == C - 1) return 0;
        
    if (dp[r][c] != -1) return dp[r][c];

    return dp[r][c] = V[r][c] +
           min(findMinPath(V, r + 1, c),
               findMinPath(V, r, c + 1));
}

int main() {
    vector<vector<int>> V = {
        {1, 3, 1},
        {1, 5, 1},
        {4, 2, 1}
    };

    memset(dp, -1, sizeof(dp));
    cout << findMinPath(V, 0, 0);
}
