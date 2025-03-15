# APP 嵌入 H5 页面说明文档
---
接入APP，开发者需要按照如下步骤完成：

### 第一步：获取服务嵌入链接地址
1. 获取商户登录凭证：`access_token` 来鉴权调用者身份。（已有忽略）

2. 登录[商家后台](https://platform.chongzhiling.com)，获取服务嵌入链接地址。

### 第二步：进入开发阶段
**链接地址参数说明：**
| 名称         | 类型   | 必填 | 说明     |
| ------------ | ------ | ---- | -------- |
| access_token | string | 是   | 登录凭证 |
| petId        | number | 否   | 宠物ID   |

**注意:**

- putId不传入该字段时，如果用户没有新建过宠物档案，我们将会在嵌入页面中先跳转新建宠物档案的入口。

- 如果商家需要自带用户的宠物信息，可以通过putId该字段进行传入。但请注意，前提是必须先调用宠物档案API的接口。用户在商户小程序中新建宠物档案时，顺带将宠物部分信息存入我们的数据库，我们才能获取传入的宠物ID的信息。
  
#### Android 平台
1. 添加 WebView 组件，在布局文件中添加 WebView：
```xml
<WebView
    android:id="@+id/webView"
    android:layout_width="match_parent"
    android:layout_height="match_parent" 
/>
```
2. 配置 WebView，在 Activity 中配置 WebView：
```java
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class WebActivity extends AppCompatActivity {
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web);

        webView = findViewById(R.id.webView);
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);

        webView.setWebViewClient(new WebViewClient());
        webView.loadUrl("https://platform.chongzhiling.com"); // 登录商家后台，获取服务嵌入链接地址。
    }
}
```
3. 在 AndroidManifest.xml 中添加网络权限：
```xml
<uses-permission android:name="android.permission.INTERNET"/>
```

#### iOS 平台
1. 添加 WebView 组件，在 Storyboard 中拖拽一个 WKWebView 组件，或者在代码中创建：
```swift
import WebKit

class WebViewController: UIViewController {
    var webView: WKWebView!

    override func viewDidLoad() {
        super.viewDidLoad()

        webView = WKWebView(frame: self.view.frame)
        self.view.addSubview(webView)

        if let url = URL(string: "https://platform.chongzhiling.com") {
            let request = URLRequest(url: url)
            webView.load(request) // 登录商家后台，获取服务嵌入链接地址。
        }
    }
}
```

2. 配置 Info.plist，确保在 Info.plist 中添加允许加载非安全连接的配置（如果需要）：
```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
</dict>
```