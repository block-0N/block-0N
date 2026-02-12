<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>温州县域公交·龙港-苍南公交</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "Microsoft YaHei", "Heiti SC", sans-serif;
            background-color: #f0f4f8;
            color: #333;
            line-height: 1.6;
            padding: 20px;
            max-width: 1000px; 
            margin: 0 auto;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .header-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            margin-bottom: 10px;
            border-bottom: 1px solid #e0e6ed;
        }

        .nav-logo {
            font-size: 1.3rem;
            font-weight: bold;
            color: #2980b9;
        }

        .nav-menu {
            display: flex;
            gap: 20px;
        }

        .nav-link {
            text-decoration: none;
            color: #555;
            font-size: 0.95rem;
            transition: color 0.2s ease;
        }

        .nav-link:hover {
            color: #2980b9;
            font-weight: 500;
        }

        .search-container {
            max-width: 500px;
            margin: 0 auto 30px;
            position: relative;
        }

        #search-input {
            width: 100%;
            padding: 12px 20px;
            border: 1px solid #ddd;
            border-radius: 30px;
            font-size: 0.95rem;
            outline: none;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        #search-input:focus {
            border-color: #3498db;
            box-shadow: 0 0 8px rgba(52, 152, 219, 0.2);
        }

        .search-btn {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: #3498db;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 20px;
            cursor: pointer;
            transition: background-color 0.2s ease;
        }

        .search-btn:hover {
            background-color: #2980b9;
        }

        .update-tip {
            background-color: #e8f4fd;
            border-left: 4px solid #3498db;
            padding: 10px 15px;
            margin: 0 auto 20px;
            max-width: 800px;
            border-radius: 5px;
            font-size: 0.9rem;
            color: #2c3e50;
        }

        .page-title {
            text-align: center;
            font-size: 2rem;
            color: #2c3e50;
            margin: 10px 0 20px;
            padding-bottom: 15px;
            border-bottom: 3px solid #2980b9;
            text-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .category-title {
            font-size: 1.3rem;
            color: #2c3e50;
            margin: 30px 0 15px;
            padding-left: 10px;
            border-left: 3px solid #3498db;
        }

        .area-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            list-style: none;
            margin-top: 20px;
            flex: 1;
        }

        .area-item {
            background-color: white;
            border-radius: 10px;
            padding: 24px 20px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            text-align: center;
            border: 1px solid #e8f4f8;
            position: relative;
            overflow: hidden;
        }

        .area-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background-color: #3498db;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
        }

        .area-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
            border-color: #3498db;
        }

        .area-item:hover::before {
            transform: translateX(0);
        }

        .area-link {
            text-decoration: none;
            color: #2980b9;
            font-size: 1.2rem;
            font-weight: 600;
            display: block;
            margin-bottom: 8px;
            transition: color 0.2s ease;
        }

        .area-link:hover {
            color: #1a5f8b;
            text-decoration: underline;
            text-underline-offset: 4px;
        }

        .area-desc {
            margin-top: 10px;
            color: #666;
            font-size: 0.9rem;
            line-height: 1.5;
            text-indent: 2em;
        }

        .tips-section {
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            margin: 30px 0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .tips-title {
            font-size: 1.2rem;
            color: #2980b9;
            margin-bottom: 15px;
            font-weight: 600;
        }

        .tips-list {
            padding-left: 20px;
            color: #555;
            font-size: 0.95rem;
        }

        .tips-list li {
            margin-bottom: 8px;
        }

        .footer {
            margin-top: 40px;
            text-align: center;
            padding: 20px 0;
            color: #888;
            font-size: 0.85rem;
            border-top: 1px solid #e0e6ed;
        }

        @media (max-width: 768px) {
            .nav-menu {
                gap: 10px;
            }
            
            .search-container {
                max-width: 100%;
            }
        }

        @media (max-width: 600px) {
            .header-nav {
                flex-direction: column;
                gap: 10px;
                align-items: flex-start;
            }

            .area-list {
                grid-template-columns: 1fr;
                gap: 15px;
            }

            .page-title {
                font-size: 1.5rem;
                margin: 15px 0 20px;
            }

            .category-title {
                font-size: 1.1rem;
            }

            .area-link {
                font-size: 1.1rem;
            }

            .area-desc {
                font-size: 0.85rem;
                text-indent: 1em;
            }

            .footer {
                margin-top: 30px;
                font-size: 0.8rem;
            }
        }
    </style>
</head>
<body>
    <header class="header-nav">
        <div class="nav-logo">温州县域公交</div>
        <nav class="nav-menu">
            <a href="https://www.mygolbs.com/home" class="nav-link">实时公交</a>
            <a href="about.html" class="nav-link">关于我们</a>
            <a href="tips.html" class="nav-link">乘车指南</a>
        </nav>
    </header>

    <div class="update-tip">
        <strong>更新提示：</strong> <a href="20260216-0218notice.html" class="nav-link">春节假期公交班次调整，点此查看。</a>
    </div>

    <h1 class="page-title">温州县域公交·龙港-苍南公交</h1>

    <div class="search-container">
        <input type="text" id="search-input" placeholder="搜索公交线路">
        <button class="search-btn" onclick="searchRoute()">搜索</button>
    </div>

    <h2 class="category-title">POV视频合集</h2>
    <ul class="area-list">
        <li class="area-item">
            <a href="longgangbuspov.html" 
               class="area-link" 
               target="_blank" 
               rel="noopener noreferrer">
                龙港公交POV合集
            </a>
            <p class="area-desc">包含龙港1路、2路、5路等多条公交线路的POV视频</p>
        </li>
        <li class="area-item">
            <a href="cangnanbuspov.html" 
               class="area-link" 
               target="_blank" 
               rel="noopener noreferrer">
                苍南公交POV合集
            </a>
            <p class="area-desc">包含苍南101路、106路、107路等多条公交线路的POV视频</p>
        </li>
    </ul>

    <h2 class="category-title">路线图合集</h2>
    <ul class="area-list">
        <li class="area-item">
            <a href="longgangbusroute.html" 
               class="area-link" 
               target="_blank" 
               rel="noopener noreferrer">
                龙港公交路线图合集
            </a>
            <p class="area-desc">包含龙港1路、2路、5路等多条公交线路的路线图</p>
        </li> 
        <li class="area-item">
            <a href="cangnanbusroute.html" 
               class="area-link" 
               target="_blank" 
               rel="noopener noreferrer">
                苍南公交路线图合集
            </a>
            <p class="area-desc">苍南101路、102路、103路等多条公交线路的路线图</p>
        </li>
    </ul>

    <h2 class="category-title">线路概况合集</h2>
    <ul class="area-list">
        <li class="area-item">
            <a href="longgangbusintroduction.html" 
               class="area-link" 
               target="_blank" 
               rel="noopener noreferrer">
                龙港公交线路概况合集
            </a>
            <p class="area-desc">包含龙港1路、2路、5路等多条公交线路的概况</p>
        </li> 
        <li class="area-item">
            <a href="cangnanbusintroduction.html" 
               class="area-link" 
               target="_blank" 
               rel="noopener noreferrer">
                苍南公交线路概况合集
            </a>
            <p class="area-desc">苍南101路、102路、103路等多条公交线路的概况</p>
        </li>
    </ul>
  
  <h2 class="category-title">市内其他线路</h2>
    <ul class="area-list">
        <li class="area-item">
            <a href="https://wiki.wzbus.net/wiki/首页" 
               class="area-link" 
               target="_blank" 
               rel="noopener noreferrer">
                瓯越交通百科入口
            </a>
            <p class="area-desc">温州市内公交线路的概况</p>
        </li>
    </ul>

    <!-- 新增公交服务小贴士 -->
    <div class="tips-section">
        <h3 class="tips-title">公交出行小贴士</h3>
        <ul class="tips-list">
            <li>龙港/苍南公交支持支付宝、微信乘车码扫码乘车，无需备零钱</li>
            <li>节假日部分线路会临时调整运营时间，建议出行前确认</li>
        </ul>
    </div>

    <div class="footer">
        <p>温州县域公交信息平台 © 2026 版权所有</p>
        <p>温馨提示：本平台为公益性信息平台，无任何商业运营行为</p>
        <p>数据更新时间：2026年2月 | 联系电话：17857746331</p>
    </div>

    <script>
        function searchRoute() {
            const searchInput = document.getElementById('search-input');
            const keyword = searchInput.value.trim().toLowerCase();
            
            if (!keyword) {
                alert('请输入要搜索的公交线路名称（如：龙港1路）');
                return;
            }

            const routeMap = {
                '龙港1路': 'longgangbusintroduction.html',
                '龙港2路': 'longgangbusintroduction.html',
                '龙港5路': 'longgangbusintroduction.html',
                '苍南101路': 'cangnanbusintroduction.html',
                '苍南102路': 'cangnanbusintroduction.html',
                '苍南103路': 'cangnanbusintroduction.html',
                '苍南106路': 'cangnanbuspov.html',
                '苍南107路': 'cangnanbuspov.html'
            };

            let targetUrl = null;
            for (const [routeName, url] of Object.entries(routeMap)) {
                if (routeName.toLowerCase().includes(keyword)) {
                    targetUrl = url;
                    break;
                }
            }

            if (targetUrl) {
                window.open(targetUrl, '_blank');
            } else {
                alert(`未找到包含"${keyword}"的公交线路，您可查看线路合集获取更多信息`);
            }
            
            searchInput.value = '';
        }

        document.getElementById('search-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchRoute();
            }
        });
    </script>
</body>
</html>
