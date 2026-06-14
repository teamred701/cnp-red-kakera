// ============================================================
// KAKERA NFT Wallet Connection & Display
// ============================================================
// セットアップ: https://helius.dev で無料APIキーを取得し下に設定
// ============================================================

const HELIUS_API_KEY = 'd0976ca0-c070-4b80-b0e1-28534101d122';
const KAKERA_COLLECTION_NAME = 'cnp red kakera';
const KAKERA_CREATOR_ADDRESS = 'D1YbE6tpf7m8itvWRL1n5N6m1Vx6Yck2mLgy52gGpSGS';
const CNPRED_CREATOR_ADDRESS = 'ALaC3msikc7MFJeVywFBiGLBfM7f4Uoy1gXWu4S3xJie';
const CNPRED_EXCHANGE_MIN_NUMBER = 2001;

let connectedWallet = null;
let connectedProvider = null;
let connectedWalletName = '';

// ============================================================
// Solana ウォレット定義
// ============================================================
const SOLANA_WALLETS = [
    {
        name: 'Phantom',
        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNjQiIGZpbGw9IiNBQjlGRjIiLz48cGF0aCBkPSJNMTEwLjU4NCA2NC45MTQySDk5LjE0MkM5OS4xNDIgNDEuNzY1MSA4MC4xNzMgMjMgNTYuNzcyNCAyM0MzMy42NjEyIDIzIDE0Ljg3NCA0MS4zMDU3IDE0LjQxNzggNjQuMDU4M0MxMy45NDg4IDg3LjQ0NDYgMzQuNTI0NCAxMDggNTguMTMzOCAxMDhINjIuMzA2NEM4My4xNDM4IDEwOCAxMTAuNTg0IDg5LjQ1NDQgMTEwLjU4NCA2NC45MTQyWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC45NSIvPjxjaXJjbGUgY3g9IjQ1LjUiIGN5PSI1Ny41IiByPSI1LjUiIGZpbGw9IiM1NTFCRjkiLz48Y2lyY2xlIGN4PSI3Mi41IiBjeT0iNTcuNSIgcj0iNS41IiBmaWxsPSIjNTUxQkY5Ii8+PC9zdmc+',
        getProvider: function() {
            return window.phantom?.solana?.isPhantom ? window.phantom.solana : null;
        },
        downloadUrl: 'https://phantom.app/',
        deepLink: 'https://phantom.app/ul/browse/'
    },
    {
        name: 'Solflare',
        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNjQiIGZpbGw9IiMxMjEyMTIiLz48cGF0aCBkPSJNNjQgMjhMODggNTZMNjQgODRMNDAgNTZMNjQgMjhaIiBmaWxsPSIjRkM4MjJCIi8+PHBhdGggZD0iTTY0IDUyTDgwIDY4TDY0IDg0TDQ4IDY4TDY0IDUyWiIgZmlsbD0iI0ZGQTUwMCIvPjxwYXRoIGQ9Ik02NCA2OEw3NiA4MEw2NCA5Mkw1MiA4MEw2NCA2OFoiIGZpbGw9IiNGRkQ3MDAiLz48L3N2Zz4=',
        getProvider: function() {
            return window.solflare?.isSolflare ? window.solflare : null;
        },
        downloadUrl: 'https://solflare.com/',
        deepLink: 'https://solflare.com/ul/v1/browse/'
    },
    {
        name: 'Backpack',
        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNjQiIGZpbGw9IiNFMzM1MzUiLz48cmVjdCB4PSI0MCIgeT0iMzYiIHdpZHRoPSI0OCIgaGVpZ2h0PSI1NiIgcng9IjgiIGZpbGw9IndoaXRlIi8+PHJlY3QgeD0iNDgiIHk9IjI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMTYiIHJ4PSI4IiBmaWxsPSJ3aGl0ZSIvPjxyZWN0IHg9IjQ4IiB5PSI1NiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjQiIGZpbGw9IiNFMzM1MzUiLz48L3N2Zz4=',
        getProvider: function() {
            return window.backpack?.isBackpack ? window.backpack : null;
        },
        downloadUrl: 'https://www.backpack.app/',
        deepLink: null
    }
];

// ============================================================
// モーダル表示/非表示
// ============================================================
function openWalletModal() {
    const modal = document.getElementById('wallet-modal');
    const list = document.getElementById('wallet-list');
    list.innerHTML = '';

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    SOLANA_WALLETS.forEach(function(wallet) {
        const provider = wallet.getProvider();
        const isInstalled = !!provider;
        const item = document.createElement('button');
        item.className = 'wallet-modal-item';

        var statusText, statusClass;
        if (isInstalled) {
            statusText = currentLang === 'ja' ? '検出済み' : 'Detected';
            statusClass = 'detected';
        } else {
            statusText = currentLang === 'ja' ? 'インストール' : 'Install';
            statusClass = 'not-installed';
        }

        item.innerHTML =
            '<img src="' + wallet.icon + '" alt="' + wallet.name + '" class="wallet-modal-icon">' +
            '<span class="wallet-modal-name">' + wallet.name + '</span>' +
            '<span class="wallet-modal-status ' + statusClass + '">' + statusText + '</span>';

        item.addEventListener('click', function() {
            if (isInstalled) {
                closeWalletModal();
                connectWithProvider(wallet.name, provider);
            } else if (isMobile && wallet.deepLink) {
                window.location.href = wallet.deepLink + encodeURIComponent(window.location.href);
            } else {
                window.open(wallet.downloadUrl, '_blank');
            }
        });

        list.appendChild(item);
    });

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeWalletModal() {
    var modal = document.getElementById('wallet-modal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// ============================================================
// ウォレット接続/切断
// ============================================================
async function connectWithProvider(walletName, provider) {
    try {
        var resp = await provider.connect();
        connectedWallet = resp.publicKey.toString();
        connectedProvider = provider;
        connectedWalletName = walletName;
        updateWalletUI(true);
        await fetchKakeraNFTs(connectedWallet);
    } catch (err) {
        if (err.code === 4001) return;
        console.error('Wallet connection error:', err);
        showError(currentLang === 'ja'
            ? 'ウォレット接続に失敗しました。'
            : 'Failed to connect wallet.');
    }
}

async function disconnectWallet() {
    if (connectedProvider) {
        try { await connectedProvider.disconnect(); } catch(e) {}
    }
    connectedWallet = null;
    connectedProvider = null;
    connectedWalletName = '';
    updateWalletUI(false);
    clearNFTGrid();
}

// ============================================================
// UI更新
// ============================================================
function updateWalletUI(connected) {
    var connectSection = document.getElementById('wallet-connect-section');
    var connectedSection = document.getElementById('wallet-connected-section');
    var walletAddress = document.getElementById('wallet-address');
    var walletNameEl = document.getElementById('wallet-name');
    var nftSection = document.getElementById('nft-section');
    var cnpredSection = document.getElementById('cnpred-section');

    if (connected && connectedWallet) {
        connectSection.style.display = 'none';
        connectedSection.style.display = 'flex';
        nftSection.style.display = 'block';
        if (cnpredSection) cnpredSection.style.display = 'block';
        var short = connectedWallet.slice(0, 4) + '...' + connectedWallet.slice(-4);
        walletAddress.textContent = short;
        walletAddress.title = connectedWallet;
        if (walletNameEl) walletNameEl.textContent = connectedWalletName;
    } else {
        connectSection.style.display = 'flex';
        connectedSection.style.display = 'none';
        nftSection.style.display = 'none';
        if (cnpredSection) cnpredSection.style.display = 'none';
    }
}

// ============================================================
// NFT取得 & 表示
// ============================================================
async function fetchKakeraNFTs(walletAddress) {
    showLoading();

    if (HELIUS_API_KEY === 'YOUR_HELIUS_API_KEY_HERE') {
        showError(currentLang === 'ja'
            ? 'Helius APIキーが設定されていません。wallet.js の HELIUS_API_KEY を設定してください。'
            : 'Helius API key is not configured. Please set HELIUS_API_KEY in wallet.js.');
        return;
    }

    try {
        var url = 'https://mainnet.helius-rpc.com/?api-key=' + HELIUS_API_KEY;
        var page = 1;
        var allAssets = [];

        while (true) {
            var response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    jsonrpc: '2.0',
                    id: 'kakera-fetch',
                    method: 'getAssetsByOwner',
                    params: {
                        ownerAddress: walletAddress,
                        page: page,
                        limit: 1000,
                        displayOptions: { showFungible: false, showNativeBalance: false }
                    }
                })
            });

            var data = await response.json();
            if (data.error) throw new Error(data.error.message || 'API error');

            var items = data.result?.items || [];
            if (items.length === 0) break;
            allAssets = allAssets.concat(items);
            if (items.length < 1000) break;
            page++;
        }

        var kakeraNFTs = filterKakeraNFTs(allAssets);
        var cnpredNFTs = filterCnpredNFTs(allAssets);

        if (kakeraNFTs.length === 0) {
            showEmptyMessage();
        } else {
            displayNFTs(kakeraNFTs);
        }

        displayCnpredNFTs(cnpredNFTs);
    } catch (err) {
        console.error('NFT fetch error:', err);
        showError(currentLang === 'ja'
            ? 'NFTの取得に失敗しました。しばらくしてからお試しください。'
            : 'Failed to fetch NFTs. Please try again later.');
    }
}

function filterKakeraNFTs(assets) {
    return assets.filter(function(asset) {
        var collectionName = (asset.content?.metadata?.name || '').toLowerCase();
        var collectionSymbol = (asset.content?.metadata?.symbol || '').toLowerCase();
        var grouping = asset.grouping || [];
        var collectionGroup = grouping.find(function(g) { return g.group_key === 'collection'; });
        var creators = asset.creators || [];

        var nameMatch = collectionName.includes('kakera') || collectionSymbol.includes('kakera');
        var groupMatch = KAKERA_CREATOR_ADDRESS && collectionGroup?.group_value === KAKERA_CREATOR_ADDRESS;
        var creatorMatch = KAKERA_CREATOR_ADDRESS && creators.some(function(c) { return c.address === KAKERA_CREATOR_ADDRESS && c.verified; });

        return nameMatch || groupMatch || creatorMatch;
    });
}

function filterCnpredNFTs(assets) {
    return assets.filter(function(asset) {
        var grouping = asset.grouping || [];
        var collectionGroup = grouping.find(function(g) { return g.group_key === 'collection'; });
        var creators = asset.creators || [];

        var groupMatch = collectionGroup?.group_value === CNPRED_CREATOR_ADDRESS;
        var creatorMatch = creators.some(function(c) { return c.address === CNPRED_CREATOR_ADDRESS && c.verified; });

        if (!groupMatch && !creatorMatch) return false;

        // 名前から番号を抽出し、2001以上のみ（KAKERA交換個体）
        var name = asset.content?.metadata?.name || '';
        var numberMatch = name.match(/#?(\d+)/);
        if (!numberMatch) return false;
        var num = parseInt(numberMatch[1], 10);
        return num >= CNPRED_EXCHANGE_MIN_NUMBER;
    });
}

function displayCnpredNFTs(nfts) {
    var section = document.getElementById('cnpred-section');
    var grid = document.getElementById('cnpred-grid');
    var count = document.getElementById('cnpred-count');
    var empty = document.getElementById('cnpred-empty');

    if (!section || !grid) return;

    grid.innerHTML = '';

    if (nfts.length === 0) {
        if (empty) empty.style.display = 'block';
        grid.style.display = 'none';
        if (count) count.style.display = 'none';
        return;
    }

    if (empty) empty.style.display = 'none';
    grid.style.display = 'grid';

    count.textContent = currentLang === 'ja'
        ? nfts.length + ' 体の交換済みCNP RED°を保有'
        : nfts.length + ' exchanged CNP RED° owned';
    count.style.display = 'block';

    nfts.forEach(function(nft) {
        var name = nft.content?.metadata?.name || 'CNP RED°';
        var imageUrl = nft.content?.links?.image || nft.content?.files?.[0]?.uri || '';

        var card = document.createElement('div');
        card.className = 'nft-card cnpred-card';

        var imgContainer = document.createElement('div');
        imgContainer.className = 'nft-image';

        if (imageUrl) {
            var img = document.createElement('img');
            img.src = imageUrl;
            img.alt = name;
            img.loading = 'lazy';
            img.onerror = function() {
                this.src = 'data:image/svg+xml,' + encodeURIComponent(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">' +
                    '<rect fill="#1a1a2e" width="200" height="200"/>' +
                    '<text fill="#666" font-size="14" text-anchor="middle" x="100" y="105">No Image</text></svg>'
                );
            };
            imgContainer.appendChild(img);
        }

        var nameEl = document.createElement('h3');
        nameEl.className = 'nft-name';
        nameEl.textContent = name;

        card.appendChild(imgContainer);
        card.appendChild(nameEl);
        grid.appendChild(card);
    });
}

function displayNFTs(nfts) {
    var grid = document.getElementById('nft-grid');
    var loading = document.getElementById('nft-loading');
    var empty = document.getElementById('nft-empty');
    var error = document.getElementById('nft-error');
    var count = document.getElementById('nft-count');

    loading.style.display = 'none';
    empty.style.display = 'none';
    error.style.display = 'none';
    grid.style.display = 'grid';

    count.textContent = currentLang === 'ja'
        ? nfts.length + ' 個のKAKERA NFTを保有'
        : nfts.length + ' KAKERA NFT(s) owned';
    count.style.display = 'block';

    grid.innerHTML = '';

    nfts.forEach(function(nft) {
        var name = nft.content?.metadata?.name || 'KAKERA';
        var imageUrl = nft.content?.links?.image || nft.content?.files?.[0]?.uri || '';

        var card = document.createElement('div');
        card.className = 'nft-card';

        var imgContainer = document.createElement('div');
        imgContainer.className = 'nft-image';

        if (imageUrl) {
            var img = document.createElement('img');
            img.src = imageUrl;
            img.alt = name;
            img.loading = 'lazy';
            img.onerror = function() {
                this.src = 'data:image/svg+xml,' + encodeURIComponent(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">' +
                    '<rect fill="#1a1a2e" width="200" height="200"/>' +
                    '<text fill="#666" font-size="14" text-anchor="middle" x="100" y="105">No Image</text></svg>'
                );
            };
            imgContainer.appendChild(img);
        }

        var nameEl = document.createElement('h3');
        nameEl.className = 'nft-name';
        nameEl.textContent = name;

        card.appendChild(imgContainer);
        card.appendChild(nameEl);
        grid.appendChild(card);
    });
}

// ============================================================
// 状態表示ヘルパー
// ============================================================
function showLoading() {
    document.getElementById('nft-grid').style.display = 'none';
    document.getElementById('nft-grid').innerHTML = '';
    document.getElementById('nft-loading').style.display = 'block';
    document.getElementById('nft-empty').style.display = 'none';
    document.getElementById('nft-error').style.display = 'none';
    document.getElementById('nft-count').style.display = 'none';
}

function showEmptyMessage() {
    document.getElementById('nft-grid').style.display = 'none';
    document.getElementById('nft-loading').style.display = 'none';
    document.getElementById('nft-empty').style.display = 'block';
    document.getElementById('nft-error').style.display = 'none';
    document.getElementById('nft-count').style.display = 'none';
}

function showError(message) {
    document.getElementById('nft-grid').style.display = 'none';
    document.getElementById('nft-loading').style.display = 'none';
    document.getElementById('nft-empty').style.display = 'none';
    document.getElementById('nft-error').style.display = 'block';
    document.getElementById('nft-error').querySelector('.error-message').textContent = message;
    document.getElementById('nft-count').style.display = 'none';
}

function clearNFTGrid() {
    document.getElementById('nft-grid').style.display = 'none';
    document.getElementById('nft-grid').innerHTML = '';
    document.getElementById('nft-loading').style.display = 'none';
    document.getElementById('nft-empty').style.display = 'none';
    document.getElementById('nft-error').style.display = 'none';
    document.getElementById('nft-count').style.display = 'none';

    // CNP RED°セクションもクリア
    var cnpredGrid = document.getElementById('cnpred-grid');
    var cnpredCount = document.getElementById('cnpred-count');
    var cnpredEmpty = document.getElementById('cnpred-empty');
    if (cnpredGrid) { cnpredGrid.style.display = 'none'; cnpredGrid.innerHTML = ''; }
    if (cnpredCount) cnpredCount.style.display = 'none';
    if (cnpredEmpty) cnpredEmpty.style.display = 'none';
}

// ============================================================
// 初期化
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    // モーダル背景クリックで閉じる
    var modal = document.getElementById('wallet-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeWalletModal();
        });
    }

    // ESCキーでモーダルを閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeWalletModal();
    });

    // 各ウォレットの接続状態変更を監視
    SOLANA_WALLETS.forEach(function(wallet) {
        var provider = wallet.getProvider();
        if (provider) {
            try {
                provider.on('disconnect', function() {
                    if (connectedWalletName === wallet.name) {
                        connectedWallet = null;
                        connectedProvider = null;
                        connectedWalletName = '';
                        updateWalletUI(false);
                        clearNFTGrid();
                    }
                });
                provider.on('accountChanged', async function(publicKey) {
                    if (connectedWalletName === wallet.name) {
                        if (publicKey) {
                            connectedWallet = publicKey.toString();
                            updateWalletUI(true);
                            await fetchKakeraNFTs(connectedWallet);
                        } else {
                            connectedWallet = null;
                            connectedProvider = null;
                            connectedWalletName = '';
                            updateWalletUI(false);
                            clearNFTGrid();
                        }
                    }
                });
            } catch(e) {}
        }
    });
});
