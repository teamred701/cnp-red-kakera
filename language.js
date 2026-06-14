// 翻訳データ
const translations = {
    ja: {
        // 共通
        'nav-home': 'トップページ',
        'nav-info': 'KAKERANFTとは',
        'nav-mint': 'ミント方法',
        'nav-system': 'KAKERA排出システム',
        'nav-exchange': '交換方法',
        'nav-characters': 'キャラクター紹介',
        'footer': '© 2025 CNP×RED° KAKERANFT',

        // index.html
        'index-title': 'CNP×RED° KAKERANFT',
        'footer-policy': 'プライバシーポリシー・免責事項',
        'index-heading': 'KAKERANFTについて',

        // policy.html
        'policy-page-title': 'プライバシーポリシー・免責事項 - CNP×RED° KAKERANFT',
        'disclaimer-title': '免責事項',
        'disclaimer-text': '当サイトに掲載されている情報の正確性には万全を期していますが、利用者が当サイトの情報を用いて行う一切の行為について、一切の責任を負わないものとします。<br>当サイトは、予告なしに内容を変更・削除することがあります。<br>また、NFTの取引には価格変動リスクが伴います。当サイトの情報は投資勧誘を目的としたものではなく、実際の取引は利用者ご自身の判断と責任において行ってください。',
        'about-copyright-title': '著作権・肖像権について',
        'about-copyright-text': '当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。<br>当サイトはリンクフリーですが、著作権を放棄するものではありません。',
        'privacy-title': 'プライバシーポリシー',
        'privacy-ads-title': '広告の配信について',
        'privacy-ads-text': '当サイトでは、第三者配信の広告サービス（Googleアドセンス）を利用しています。<br>このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報『Cookie』（氏名、住所、メール アドレス、電話番号は含まれません）を使用することがあります。<br>またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、<a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" style="color: #fff; text-decoration: underline;">Googleのポリシーと規約</a>をご覧ください。',
        'privacy-analytics-title': 'アクセス解析ツールについて',
        'privacy-analytics-text': '当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。<br>このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。<br>この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。<br>この規約に関して、詳しくは<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" style="color: #fff; text-decoration: underline;">Googleアナリティクス利用規約</a>をご覧ください。',
        'index-marketplace': 'CNP×RED°のKAKERANFTコレクション',
        'index-cnpred': 'CNP×RED°に関するページはこちら',
        'btn-info': 'KAKERANFTとは',
        'btn-mint': 'ミント方法',
        'btn-system': 'KAKERA排出システム',
        'btn-exchange': '交換方法',
        'btn-characters': 'キャラクター紹介',

        // kakera-info.html
        'info-title': 'CNP×RED° KAKERANFTとは',
        'info-heading': 'CNP×RED° KAKERANFTとは？',
        'info-text1': 'CNP×RED°のKAKERANFTは、人気NFTプロジェクトCryptoNinja Partners（CNP）とRED°のコラボレーションによって誕生した、特別なデジタルコレクションです。',
        'info-text2': '全11種類の「カケラ」を集めることで、CNP×RED°限定の1体NFTと交換可能。',
        'info-text3': 'コレクター必見の、唯一無二のデジタル体験があなたを待っています。',
        'info-links-title': '公式リンク',
        'info-dashboard': 'ミントダッシュボード',
        'info-marketplace': 'マーケットプレイス',
        'btn-back': 'トップページへ',

        // about.html
        'about-title': 'CNP RED° KAKERA排出システム',
        'about-incentive-title': '召喚インセンティブ',
        'about-incentive-text': '召喚を重ねることで、カケラや特別な報酬を獲得できるシステム。',
        'about-incentive-text2': 'レアリティが高いほどリターンもアップしていきます。',
        'about-rtp-note': '※RTP＝RED° TOKYO PREMIUMトークン',
        'about-hologram': 'ホログラム',
        'about-rainbow': 'レインボー',
        'about-warlord': '武将',
        'about-grandslam': 'グランドスラム',
        'about-grandslam-badge': '3種全部召喚',
        'about-grandslam-note': '※達成者が出るかは未知数…!?',
        'about-acceleration': 'レア召喚を重ねるほど、さらなる報酬が待っている！',
        'about-milestone-title': '召喚回数ボーナス（毎月）',
        'about-milestone-text': '召喚を重ねるたびに、さらにボーナスが発生！',
        'about-milestone-text2': '継続的に挑戦することで、より多くのカケラを集められます。',
        'about-milestone-5': '召喚達成',
        'about-distribution-title': '毎月の排出ルール（上限333カケラ）',
        'about-distribution-text': '毎月、合計333カケラが排出されます。',
        'about-distribution-text2': 'チャンスは3つの枠で構成され、戦略次第で獲得量が変動！',
        'about-comp-title': 'コンプ者枠',
        'about-comp-method': 'コンプ済みユーザーで比例分配',
        'about-comp-detail': '現状37人 → 1人あたり約2.7カケラ',
        'about-comp-benefit': '早期コンプほど有利',
        'about-holder-title': 'ホルダー枠',
        'about-holder-method': '全ホルダーから抽選配布',
        'about-holder-detail': '現状246人 → 当選者平均0.4カケラ',
        'about-holder-benefit': '「持っているだけでチャンス」安心感あり',
        'about-rtp-title': 'RTP保有枠',
        'about-rtp-method': 'RTP保有量に応じて配布',
        'about-rtp-benefit': 'ホールド＆サポーターレベルを刺激',
        'about-rtp-sub': '余剰分はキャンペーン・貢献者に還元',
        'about-visual-title': '月間333カケラの配分',
        'about-legend-comp': 'コンプ者枠（100）',
        'about-legend-holder': 'ホルダー枠（100）',
        'about-legend-rtp': 'RTP保有枠（100）',
        'about-legend-other': 'その他（33）',
        'about-disclaimer': '※本ページに記載の内容は現時点での予定であり、今後変更される可能性があります。',

        // exchange.html
        'exchange-title': 'CNP×RED°交換方法',
        'exchange-heading': 'KAKERAからCNP×RED°への交換',
        'exchange-intro1': '全11種類の「KAKERA」を集めることで、CNP×RED°の1体NFTと交換することができます。',
        'exchange-intro2': 'これはコレクターのための特別な報酬システムです。',
        'exchange-required-title': '交換に必要なカケラ',
        'exchange-required-text': 'CNP×RED°と交換するには、以下の全11種類のカケラを揃える必要があります',
        'exchange-all-types': '全11種類のカケラ',
        'exchange-complete-set': 'コンプリートセットが必要',
        'exchange-one-each': '各キャラクターのカケラを1枚ずつ',
        'exchange-steps-title': '交換手順',
        'exchange-step1-title': 'ステップ1: ダッシュボードから交換ボタンをクリック',
        'exchange-step1-desc': '11種類のカケラを集めたら、ダッシュボードから「CNP REDと交換」ボタンをクリックします。',
        'exchange-step2-title': 'ステップ2: 確認画面でクリック',
        'exchange-step2-desc': '確認画面が表示されます。内容を確認して問題なければ「Yes」をクリックします。',
        'exchange-step3-title': 'ステップ3: 警告画面で継続する',
        'exchange-step3-desc': '仕様上、警告画面が表示されますが、「継続する」をクリックして進んでください。',
        'exchange-step4-title': 'ステップ4: チェックボックスをクリックして確認',
        'exchange-step4-desc': 'チェックボックスをクリックして、「はい、確認します」ボタンをクリックします。',
        'exchange-step5-title': 'ステップ5: 完了！',
        'exchange-step5-desc': '確認次第CNP×RED°の送付が行われます。ここまでできていればOK！運営チェック完了後、あなたのウォレットにCNP×RED°が送付されます。',
        'exchange-important-title': '重要事項',
        'exchange-note1': '交換に使用したカケラはバーン（焼却）されます',
        'exchange-note2': '交換は取り消しできませんので、慎重に行ってください',
        'exchange-note3': '11種類すべて揃っていることを必ず確認してください',
        'exchange-note4': 'ウォレットに十分なガス代（手数料）を用意してください',
        'exchange-links-title': '交換に必要なリンク',
        'exchange-dashboard': '交換ダッシュボード',
        'exchange-marketplace': 'カケラを購入',

        // mint.html
        'mint-title': 'KAKERANFTミント方法',
        'mint-intro-title': 'ミントの流れを把握しよう',
        'mint-intro-text1': 'CNP×RED° KAKERANFTのミントは、公式ミントダッシュボードから行います。',
        'mint-intro-text2': 'ウォレット接続からトランザクション承認、ミント結果の確認までをこのページでチェックしましょう。',
        'mint-steps-title': '画像でわかるミント手順',
        'mint-step1-title': 'ステップ1: ウォレット接続後「NFTをミント」をクリック',
        'mint-step1-desc': '公式ダッシュボードでウォレットを接続し、正しい接続先を確認したら「NFTをミント」をクリックします。',
        'mint-step2-title': 'ステップ2: 警告画面で継続する',
        'mint-step2-desc': '仕様上、警告画面が表示されますが、「継続する」をクリックして進んでください。',
        'mint-step3-title': 'ステップ3: チェックボックスをクリックして確認',
        'mint-step3-desc': 'チェックボックスをクリックして、「はい、確認します」ボタンをクリックします。',
        'mint-video-title': '動画でチェックする',
        'mint-video-desc': 'YouTubeに公開されているミント解説動画でも、操作の流れを確認できます。',
        'mint-links-title': '公式リンク',
        'mint-dashboard': 'ミントダッシュボード',
        'mint-marketplace': 'KAKERAを集める',

        // characters.html
        'characters-title': 'キャラクター紹介',

        // faq.html
        'nav-faq': 'よくある質問',
        'btn-faq': 'よくある質問',
        'faq-title': 'よくある質問 - CNP×RED° KAKERANFT',
        'faq-section-title': 'ミント・AL付与に関するよくある質問',
        'faq-section-desc': 'ミントやAL（アローリスト）付与についてよくいただくご質問をまとめました。',
        'faq-q1': 'ミント権はいつ付与されますか？',
        'faq-a1': '当選した翌月にミントが可能となります。',
        'faq-q2': '付与されるのはNFTそのものですか？',
        'faq-q3': 'AL付与の条件は何ですか？',
        'faq-q4': 'ミントに費用はかかりますか？',
        'faq-q5': 'ミントはどこで行いますか？',
        'faq-q6': '対応しているウォレットは何ですか？',
        'faq-q7': 'ミントは必ずしなければなりませんか？',
        'contact-title': 'お問い合わせ',
        'contact-desc': 'ご不明な点や追加のご質問は、以下の公式チャンネルからお気軽にお問い合わせください。',
        'contact-discord-desc': '公式サーバーのサポートチャンネルへ',
        'contact-x-desc': '公式アカウントへのDM・リプライ',

        // checkin.html
        'nav-checkin': 'チェックイン',
        'checkin-title': 'デイリーチェックイン - CNP×RED° KAKERANFT',
        'checkin-heading': 'デイリーチェックイン',
        'checkin-subtitle': '毎日ログインして1Pゲット！7日連続で+4Pボーナス！120PでKAKERA NFT AL権獲得！',
        'checkin-login-desc': 'Discordアカウントでログインして、デイリーチェックインを始めよう！<br>毎日1回チェックインすると1P獲得。7日連続でボーナス+4P。120P貯めてKAKERA NFTのAL権をゲットしよう！',
        'checkin-login-btn': 'Discordでログイン',
        'checkin-al-title': 'KAKERA NFT AL権を獲得！',
        'checkin-al-desc': '120P達成おめでとうございます！ポイントは0Pにリセットされました。<br>下のボタンからAL申請フォームにお進みください。',
        'checkin-form-btn': 'AL申請フォームへ進む',
        'checkin-form-link': 'AL申請フォームはこちら',
        'checkin-hello': 'こんにちは、',
        'checkin-san': ' さん',
        'checkin-points-label': '現在のポイント',
        'checkin-total': '通算チェックイン:',
        'checkin-al-count': 'AL権獲得:',
        'checkin-times': '回',
        'checkin-streak-days': '日連続',
        'checkin-bonus-title': '7日連続ボーナス！',
        'checkin-btn': '今日のポイントを受け取る',
        'checkin-logout': 'ログアウト',

        // my-kakera.html
        'nav-mykakera': 'マイカケラ',
        'btn-mykakera': 'マイカケラ',
        'mykakera-title': 'マイカケラ',
        'mykakera-intro': 'ウォレットを接続して、あなたが保有するKAKERA NFTを確認しましょう。',
        'mykakera-connect': 'ウォレットを接続',
        'mykakera-connected': '接続中:',
        'mykakera-disconnect': '切断する',
        'mykakera-select-wallet': 'ウォレットを選択',
        'mykakera-modal-footer': 'Solana対応ウォレットで接続できます',
        'mykakera-gallery-title': '保有KAKERA NFT',
        'mykakera-loading': 'NFTを読み込み中...',
        'mykakera-empty': 'KAKERA NFTが見つかりませんでした。<br>マーケットプレイスでKAKERAを集めましょう！',
        'mykakera-get-kakera': 'KAKERAを入手する',
        'mykakera-marketplace': 'マーケットプレイスで探す',
        'mykakera-cnpred-title': '交換済み CNP×RED°',
        'mykakera-cnpred-empty': '交換済みのCNP×RED°はまだありません。<br>11種類のKAKERAを集めてCNP×RED°と交換しましょう！'
    },
    en: {
        // Common
        'nav-home': 'Home',
        'nav-info': 'About KAKERANFT',
        'nav-mint': 'Mint Guide',
        'nav-system': 'KAKERA Distribution System',
        'nav-exchange': 'Exchange Guide',
        'nav-characters': 'Characters',
        'footer': '© 2025 CNP×RED° KAKERANFT',

        // index.html
        'index-title': 'CNP×RED° KAKERANFT',
        'index-heading': 'About KAKERANFT',
        'index-marketplace': 'CNP×RED° KAKERANFT Collection',
        'index-cnpred': 'Learn more about CNP×RED°',
        'btn-info': 'About KAKERANFT',
        'btn-mint': 'Mint Guide',
        'btn-system': 'KAKERA Distribution System',
        'btn-exchange': 'Exchange Guide',
        'btn-characters': 'Characters',

        // kakera-info.html
        'info-title': 'About CNP×RED° KAKERANFT',
        'info-heading': 'What is CNP×RED° KAKERANFT?',
        'info-text1': 'CNP×RED° KAKERANFT is a special digital collection born from the collaboration between popular NFT projects CryptoNinja Partners (CNP) and RED°.',
        'info-text2': 'Collect all 11 types of "KAKERA" to exchange for an exclusive CNP×RED° NFT.',
        'info-text3': 'A unique digital experience awaits collectors.',
        'info-links-title': 'Official Links',
        'info-dashboard': 'Mint Dashboard',
        'info-marketplace': 'Marketplace',
        'btn-back': 'Back to Home',

        // about.html
        'about-title': 'CNP RED° KAKERA Distribution System',
        'about-incentive-title': 'Summoning Incentives',
        'about-incentive-text': 'A system where you can earn KAKERA and special rewards by repeating summons.',
        'about-incentive-text2': 'Higher rarity means higher returns.',
        'about-rtp-note': '※RTP = RED° TOKYO PREMIUM Token',
        'about-hologram': 'Hologram',
        'about-rainbow': 'Rainbow',
        'about-warlord': 'Warlord',
        'about-grandslam': 'Grand Slam',
        'about-grandslam-badge': 'Summon all 3 types',
        'about-grandslam-note': '※Achievement status unknown...!?',
        'about-acceleration': 'The more rare summons you perform, the more rewards await!',
        'about-milestone-title': 'Monthly Summon Count Bonus',
        'about-milestone-text': 'Additional bonuses with each summon!',
        'about-milestone-text2': 'Continuously challenge to collect more KAKERA.',
        'about-milestone-5': 'Summons Achieved',
        'about-distribution-title': 'Monthly Distribution Rules (Max 333 KAKERA)',
        'about-distribution-text': 'A total of 333 KAKERA are distributed monthly.',
        'about-distribution-text2': 'Three categories of chances, with acquisition amounts varying by strategy!',
        'about-comp-title': 'Completionist Quota',
        'about-comp-method': 'Proportional distribution among completionists',
        'about-comp-detail': 'Current: 37 people → approx. 2.7 KAKERA per person',
        'about-comp-benefit': 'Earlier completion is more advantageous',
        'about-holder-title': 'Holder Quota',
        'about-holder-method': 'Lottery distribution among all holders',
        'about-holder-detail': 'Current: 246 people → average 0.4 KAKERA per winner',
        'about-holder-benefit': '"Peace of mind just by holding"',
        'about-rtp-title': 'RTP Holdings Quota',
        'about-rtp-method': 'Distribution according to RTP holdings',
        'about-rtp-benefit': 'Encourages holding & supporter levels',
        'about-rtp-sub': 'Surplus distributed to campaigns & contributors',
        'about-visual-title': 'Monthly 333 KAKERA Distribution',
        'about-legend-comp': 'Completionist Quota (100)',
        'about-legend-holder': 'Holder Quota (100)',
        'about-legend-rtp': 'RTP Holdings Quota (100)',
        'about-legend-other': 'Other (33)',
        'about-disclaimer': '※The content on this page is subject to change and may be updated in the future.',

        // exchange.html
        'exchange-title': 'CNP×RED° Exchange Guide',
        'exchange-heading': 'Exchange KAKERA for CNP×RED°',
        'exchange-intro1': 'By collecting all 11 types of "KAKERA", you can exchange them for a CNP×RED° NFT.',
        'exchange-intro2': 'This is a special reward system for collectors.',
        'exchange-required-title': 'Required KAKERA',
        'exchange-required-text': 'To exchange for CNP×RED°, you need to collect all 11 types of KAKERA',
        'exchange-all-types': 'All 11 Types of KAKERA',
        'exchange-complete-set': 'Complete set required',
        'exchange-one-each': 'One KAKERA from each character',
        'exchange-steps-title': 'Exchange Steps',
        'exchange-step1-title': 'Step 1: Click the Exchange Button on Dashboard',
        'exchange-step1-desc': 'Once you have collected all 11 types of KAKERA, click the "Exchange for CNP RED" button on the dashboard.',
        'exchange-step2-title': 'Step 2: Confirm and Click',
        'exchange-step2-desc': 'A confirmation screen will appear. Review the details and click "Yes" if everything is correct.',
        'exchange-step3-title': 'Step 3: Proceed Through Warning',
        'exchange-step3-desc': 'A warning screen will appear due to system specifications. Click "Continue" to proceed.',
        'exchange-step4-title': 'Step 4: Check the Box and Confirm',
        'exchange-step4-desc': 'Click the checkbox and then click the "Yes, I confirm" button.',
        'exchange-step5-title': 'Step 5: Complete!',
        'exchange-step5-desc': 'CNP×RED° will be sent once confirmed. You\'re all set! After the team verification is complete, CNP×RED° will be sent to your wallet.',
        'exchange-important-title': 'Important Notes',
        'exchange-note1': 'KAKERA used for exchange will be burned',
        'exchange-note2': 'Exchange cannot be reversed, please proceed carefully',
        'exchange-note3': 'Please confirm that you have all 11 types',
        'exchange-note4': 'Ensure you have enough gas fees in your wallet',
        'exchange-links-title': 'Exchange Links',
        'exchange-dashboard': 'Exchange Dashboard',
        'exchange-marketplace': 'Buy KAKERA',

        // mint.html
        'mint-title': 'KAKERANFT Mint Guide',
        'mint-intro-title': 'Understand the Mint Flow',
        'mint-intro-text1': 'Minting CNP×RED° KAKERANFT happens via the official mint dashboard.',
        'mint-intro-text2': 'Use this guide to review wallet connection, transaction approval, and how to confirm your result.',
        'mint-steps-title': 'Mint Steps with Images',
        'mint-step1-title': 'Step 1: Connect Wallet then Click “Mint NFT”',
        'mint-step1-desc': 'Connect your wallet on the official dashboard, verify the domain, and click “Mint NFT” once everything checks out.',
        'mint-step2-title': 'Step 2: Continue Through the Warning',
        'mint-step2-desc': 'A warning screen will appear; click “Continue” to move forward.',
        'mint-step3-title': 'Step 3: Check the Box and Confirm',
        'mint-step3-desc': 'Tick the checkbox and then click the “Yes, confirm” button.',
        'mint-video-title': 'Watch the Guide Video',
        'mint-video-desc': 'You can also follow the mint flow through the official YouTube walkthrough.',
        'mint-links-title': 'Official Links',
        'mint-dashboard': 'Mint Dashboard',
        'mint-marketplace': 'Collect KAKERA',

        // characters.html
        'characters-title': 'Characters',

        // faq.html
        'nav-faq': 'FAQ',
        'btn-faq': 'FAQ',
        'faq-title': 'FAQ - CNP×RED° KAKERANFT',
        'faq-section-title': 'Frequently Asked Questions about Minting & AL',
        'faq-section-desc': 'Common questions about minting and allowlist (AL) allocation.',
        'faq-q1': 'When will I receive my mint right?',
        'faq-a1': 'Minting will be available the month after you are selected.',
        'faq-q2': 'Is the NFT itself delivered to me?',
        'faq-q3': 'What are the conditions for AL allocation?',
        'faq-q4': 'Are there any fees for minting?',
        'faq-q5': 'Where do I mint?',
        'faq-q6': 'Which wallets are supported?',
        'faq-q7': 'Is minting mandatory?',
        'contact-title': 'Contact Us',
        'contact-desc': 'For any questions or inquiries, please reach out through our official channels.',
        'contact-discord-desc': 'Visit our official server support channel',
        'contact-x-desc': 'DM or reply to our official account',

        // checkin.html
        'nav-checkin': 'Check-in',
        'checkin-title': 'Daily Check-in - CNP×RED° KAKERANFT',
        'checkin-heading': 'Daily Check-in',
        'checkin-subtitle': 'Earn 1P daily! +4P bonus for 7-day streaks! Reach 120P to get a KAKERA NFT AL!',
        'checkin-login-desc': 'Log in with your Discord account to start the daily check-in!<br>Check in once per day to earn 1P. Get a +4P bonus every 7-day streak. Accumulate 120P to get a KAKERA NFT Allowlist!',
        'checkin-login-btn': 'Login with Discord',
        'checkin-al-title': 'You\'ve earned a KAKERA NFT AL!',
        'checkin-al-desc': 'Congratulations on reaching 120P! Your points have been reset to 0P.<br>Please proceed to the AL application form below.',
        'checkin-form-btn': 'Go to AL Application Form',
        'checkin-form-link': 'AL Application Form',
        'checkin-hello': 'Hello, ',
        'checkin-san': '',
        'checkin-points-label': 'Current Points',
        'checkin-total': 'Total check-ins:',
        'checkin-al-count': 'AL earned:',
        'checkin-times': '',
        'checkin-streak-days': '-day streak',
        'checkin-bonus-title': '7-Day Streak Bonus!',
        'checkin-btn': 'Claim Today\'s Point',
        'checkin-logout': 'Logout',

        // my-kakera.html
        'nav-mykakera': 'My KAKERA',
        'btn-mykakera': 'My KAKERA',
        'mykakera-title': 'My KAKERA',
        'mykakera-intro': 'Connect your wallet to view your KAKERA NFTs.',
        'mykakera-connect': 'Connect Wallet',
        'mykakera-connected': 'Connected:',
        'mykakera-disconnect': 'Disconnect',
        'mykakera-select-wallet': 'Select Wallet',
        'mykakera-modal-footer': 'Connect with a Solana-compatible wallet',
        'mykakera-gallery-title': 'Your KAKERA NFTs',
        'mykakera-loading': 'Loading NFTs...',
        'mykakera-empty': 'No KAKERA NFTs found.<br>Collect KAKERA from the marketplace!',
        'mykakera-get-kakera': 'Get KAKERA',
        'mykakera-marketplace': 'Browse Marketplace',
        'mykakera-cnpred-title': 'Exchanged CNP×RED°',
        'mykakera-cnpred-empty': 'No exchanged CNP×RED° found yet.<br>Collect all 11 types of KAKERA to exchange for CNP×RED°!',

        // policy.html
        'policy-page-title': 'Privacy Policy & Disclaimer - CNP×RED° KAKERANFT',
        'footer-policy': 'Privacy Policy & Disclaimer',
        'disclaimer-title': 'Disclaimer',
        'disclaimer-text': 'While we strive to ensure the accuracy of the information on this site, we assume no responsibility for any actions taken by users using the information on this site.<br>Contents of this site may be changed or deleted without notice.<br>Also, NFT trading involves price fluctuation risks. The information on this site is not intended as investment advice, and actual transactions should be made at the user\'s own discretion and responsibility.',
        'about-copyright-title': 'Copyright & Portrait Rights',
        'about-copyright-text': 'Unauthorized reproduction of text, images, etc., posted on this site is prohibited.<br>This site is link-free, but this does not constitute a waiver of copyright.',
        'privacy-title': 'Privacy Policy',
        'privacy-ads-title': 'About Ad Delivery',
        'privacy-ads-text': 'This site uses a third-party advertising service (Google AdSense).<br>Such ad delivery providers may use information regarding access to this site and other sites "Cookies" (not including name, address, email address, or phone number) to display advertisements for products and services tailored to user interests.<br>For details on this process regarding Google AdSense and how to prevent such information from being used by ad delivery providers, please see <a href="https://policies.google.com/technologies/ads?hl=en" target="_blank" rel="noopener noreferrer" style="color: #fff; text-decoration: underline;">Google\'s policies and terms</a>.',
        'privacy-analytics-title': 'About Access Analysis Tools',
        'privacy-analytics-text': 'This site uses Google\'s access analysis tool "Google Analytics".<br>This Google Analytics uses Cookies for traffic data collection. This traffic data is collected anonymously and does not identify individuals.<br>This feature can be rejected by disabling Cookies, so please check your browser settings.<br>For details regarding these terms, please see <a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank" rel="noopener noreferrer" style="color: #fff; text-decoration: underline;">Google Analytics Terms of Service</a>.'
    }
};

// 現在の言語を取得（デフォルトは日本語）
let currentLang = localStorage.getItem('language') || 'ja';

// ページ読み込み時に言語を適用
document.addEventListener('DOMContentLoaded', function () {
    applyLanguage(currentLang);
    updateActiveButton(currentLang);

    // 言語切り替えボタンにイベントリスナーを追加
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const lang = this.textContent.includes('日本語') ? 'ja' : 'en';
            switchLanguage(lang);
        });
    });
});

// 言語を切り替える関数
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    applyLanguage(lang);
    updateActiveButton(lang);
}

// 言語を適用する関数
function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // TITLEタグは必ずtextContent
            if (element.tagName === 'TITLE') {
                element.textContent = translations[lang][key];
            }
            // その他の要素はHTMLを含む可能性があるためinnerHTML
            else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
}

// アクティブボタンを更新する関数
function updateActiveButton(lang) {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if ((lang === 'ja' && btn.textContent.includes('日本語')) ||
            (lang === 'en' && btn.textContent.includes('English'))) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}
