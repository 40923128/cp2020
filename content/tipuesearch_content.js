var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Create GitHub web', 'text': 'prepare: \n python--fall2020_v2 \n github account \n website(firefox,chrome) \n USB(least 32GB) \n', 'tags': '', 'url': 'Create GitHub web.html'}, {'title': 'IPV6 question(NFU BGA0810)', 'text': 'need to connect Proxy: \n \xa0>add ".gitconfig" in Y:/home \n [http]\n\tproxy = http://[2001:288:6004:17::69]:3128\n[user]\n    name = useename\n    email = XXXXXXXX@gm.nfu.edu.tw \n', 'tags': '', 'url': 'IPV6 question(NFU BGA0810).html'}, {'title': 'step1-download github file(fall2020_v2)(cmd)', 'text': '1.(X): \n 2.cd (folder) \n 3.git clone  https://github.com/username/cp2020.git \n 4.git submodule add  https://github.com/username/cmsimde.git \xa0cmsimde \n step2-clon   file (folder) \n 1.open->(X):/fall2020_v2/tmp/cmsimde/up_dir \n 2.clone <up_dir> file to <cp2020> \n', 'tags': '', 'url': 'step1-download github file(fall2020_v2)(cmd).html'}, {'title': 'step2-open&set web(cmd)', 'text': '1.(X): \n 2.cd tmp/cp2020/cmsimde \n 3.python wsgi.py \n 4.clon URL<https:/IP/> and use chome to connect (punch generate_pages after finished) \xa0 \n', 'tags': '', 'url': 'step2-open&set web(cmd).html'}, {'title': 'step3-save file(cmd)', 'text': 'after step4 \n 1.ctrl+c to off web \n 2.typ ".." back <cp2020> folder \n 3.git pull \n 4.git add . \n 5.git commit -m"version name" \n 6.git push \n', 'tags': '', 'url': 'step3-save file(cmd).html'}, {'title': 'Homework', 'text': '', 'tags': '', 'url': 'Homework.html'}, {'title': 'W8H', 'text': 'https://gitter.im/mdecourse/Fall2020 \xa0uploaded in Nov12 by KMOL. \n Made in\xa0 https://app.diagrams.net/ \xa0 \n \n cp2020(python) \n https://www.kaggle.com/mdecourse/cp2020w8/ \xa0 \n """\nsemester=1091\n\ncourseno=0762\n\ncp\n\n1a 1091/0762\n\n1b 1091/0776\n\ncad\n\n2a 1091/0788\n\n2b 1091/0801\n"""\n# 導入 urllib.request: https://docs.python.org/3/library/urllib.request.html\n# 透過 urllib.request 模組中的 urlopen() 開啟網路 url 連結資料\nimport urllib.request  # the lib that handles the url stuff\n# 定義一個輸入學期與課號,就能夠輸出各課程修課人員數列的函式\n\ndef getRegList(semester, courseno):\n    # 因為課號可能以 0 開頭, 因此採字串型別輸入, 為了一致, 輸入變數一律採字串輸入\n    target_url = "https://nfulist.herokuapp.com/?semester=" + semester + "&courseno=" + courseno\n    regList = []\n    for line in urllib.request.urlopen(target_url):\n        # 由於 urlopen() 取下的網際資料為 binary 格式, 可以透過 decode() 解碼為 ASCII 資料\n        regList.append(line.decode(\'utf-8\').rstrip())\n    # 此一函式利用 return 將資料傳回\n    return regList\n    \n#print(getRegList("1091", "0776"))\n\n\n# 1b_from_nfu.txt is one line file\n#with open("1b_from_nfu.txt") as f:\n\'\'\'\nwith open("/kaggle/input/w8data/1b_oneline.txt") as f:\n    # read() will read the whole content of file\n    cRead = f.read()\nprint(cRead)\n\'\'\'\n\nwith open("/kaggle/input/w8data/1a_from_nfu.txt") as f:\n    # read() will read the whole content of file\n    cRead = f.read()\nprint(cRead)\n\n\'\'\'\n\nwith open("/kaggle/input/1b_oneline.txt") as f:\n    # readline() only read one line\n    cReadline = f.readline()\n#print(cReadline)\n\nwith open("1b_from_nfu.txt") as f:\n    # readlines() will read line by line and put into list\n    cReadlines = f.readlines()\n#print(cReadlines)\n\n# user split() to cut cRead string into list with " "\ncReadSplit = cRead.split(" ")\n#print(cReadSplit)\n\nfor i in range(len(cReadSplit)):\n    print(cReadSplit[i])\n\'\'\' \n', 'tags': '', 'url': 'W8H.html'}, {'title': 'github.io&gitlab.io', 'text': '\n', 'tags': '', 'url': 'github.io&gitlab.io.html'}, {'title': 'Homework(team)', 'text': '', 'tags': '', 'url': 'Homework(team).html'}, {'title': 'homework1', 'text': 'range:hardwear P77-P92 \n', 'tags': '', 'url': 'homework1.html'}, {'title': 'English', 'text': 'Overview In this module, we are going to cover the various types of networks, including local area networks, wide area networks, personal area networks, and metropolitan area networks. Next, we will cover the various network relationships, such as client/server and peer-to-peer, and focus on the types of resources our networks use. Finally, we will talk about the topologies of our networks, such as the bus, the ring, the star, the full mesh, and hybrid network topologies. \n Network Defined By Geography Networks are defined by the geography they cover. We start with the area around a single person, with this area being termed the personal area network (PAN). Next, we expand outward to the local area network (LAN), which can contain an entire office floor or building. Moving outward again, we have the metropolitan area network, which covers the area across the city by connecting multiple LANs together. Finally, we have the wide area network (WAN). This is the largest network we define by geography and it can go across the country or even across the world. A great example of a WAN is the Internet, since it connects many networks together and stretches across the globe. \n \n Personal Area Network A PAN has a very small range limited to just a few meters. If you stretch your hands out at your sides and spin around in a circle, this is the physical range of most PANs. Bluetooth is one of the main things we use to create a PAN, although USB and infrared can also be used for these networks. Bluetooth has a range between one meter and 100 meters depending on which class of Bluetooth you are using, but most common Bluetooth devices are class two devices limited to 10 meters. Some good examples of PANs are the connection between a USB hard drive and a laptop, or a Bluetooth cellphone connecting to your car stereo system wirelessly. \n Local Area Network \n The next type of network defined by geography is the LAN, which stands for local area network. The local area network is comprised of several devices that allow computers to connect to each other within a small geographic area. A LAN is, at its most basic, a connection of several workstations together using a hub, switch, or wireless access point. LANs have a limited distance associated with them, with each network segment usually limited to 100 meters or less. Generally, a LAN is used to network the floor of an office, or possibly the entire office building in smaller networks. LANs are generally connected in either a wired or wireless manner. If wired, they are connected using unshielded twisted pair cable using the Ethernet (IEEE 802.3) standard; if wireless, they are connected using Wi-Fi radio signal (IEEE 802.11) standards. \n \n Metropolitan Area Networks Another way we can geographically define our networks is as a MAN. A metropolitan area network connects scattered locations across the city or county. This covers a larger geographical area than a local area network, but also a much smaller area than a wide-area network. \n \n Wide Area Networks The WAN is used to connect network components that are geographically separated over vast distances together. An example of a WAN would be to connect an office in Los Angeles to another corporate office in New York. This can be done using virtual private networks (VPNs) over the Internet or using dedicated leased lines that would physically connect the city pairs together. Regardless of the method of connection, once the two local area networks from Los Angeles and New York are connected, they become part of the larger wide area network topology. \n \n \n', 'tags': '', 'url': 'English.html'}, {'title': '中文', 'text': '總覽 在本模塊中，我們將涵蓋各種類型的網絡，包括局域網，廣域網，個人局域網和城域網。接下來，我們將介紹各種網絡關係，例如:客戶端/服務器和對等網絡，並重點介紹網絡使用的資源類型。最後，我們將討論我們的網絡拓撲，例如:總線，環形，星形，全網格和混合網絡拓撲。 地理定義的網絡 網絡由它們所覆蓋的地理位置定義。我們從一個人周圍的區域開始，將該區域稱為個人區域網絡（PAN）。接下來，我們向外擴展到局域網（LAN），該局域網可以包含整個辦公樓層或建築物。再次向外移動，我們有了城域網，該城域網通過將多個LAN連接在一起而覆蓋了整個城市。最後，我們有廣域網（WAN）。這是我們按地理位置定義的最大網絡，它可以遍及全國，甚至遍及全球。WAN就是一個很好的例子，因為Internet將許多網絡連接在一起並遍及全球。 個人區域網 PAN的範圍很小，只有幾米。如果您將雙手伸向兩側並轉一圈，則這是大多數PAN的物理範圍。藍牙是我們用於創建PAN的主要內容之一，儘管USB和紅外也可以用於這些網絡。藍牙的範圍在1米至100米之間，具體取決於您使用的藍牙類別，但是大多數常見的藍牙設備是限於10米的第二類設備。PAN的一些很好的例子是USB硬盤驅動器和筆記本電腦之間的連接，或者是無線連接到汽車立體聲系統的藍牙手機。 局域網 地理定義的下一種網絡類型是LAN，它代表局域網。局域網由幾個設備組成，這些設備使計算機可以在一個較小的地理區域內相互連接。局域網最基本的是使用集線器，交換機或無線訪問點將多個工作站連接在一起。局域網的距離有限，每個網段通常限制在100米或更短。通常，LAN用於將辦公室地板或較小網絡中的整個辦公樓聯網。LAN通常以有線或無線方式連接。如果已連接，則使用符合以太網（IEEE 802.3）標準的非屏蔽雙絞線電纜進行連接；如果為無線，則它們使用Wi-Fi無線電信號（IEEE 802.11）標准進行連接。 \n 都會網 我們可以在地理上定義網絡的另一種方法是將其作為MAN。城域網連接整個城市或縣的分散位置。這比局域網覆蓋更大的地理區域，但是比廣域網覆蓋的區域小得多。 廣域網 WAN用於將地理位置遙遠的網絡組件連接在一起。WAN的一個示例是將洛杉磯的辦公室連接到紐約的另一公司辦公室。這可以通過Internet上的虛擬專用網絡（VPN）或使用將城市對實際連接在一起的專用租用線路來完成。無論採用哪種連接方法，來自洛杉磯和紐約的兩個局域網一旦連接，它們便成為更大的廣域網拓撲的一部分。 \n \n', 'tags': '', 'url': '中文.html'}, {'title': 'homework2', 'text': '', 'tags': '', 'url': 'homework2.html'}, {'title': 'homework3', 'text': '', 'tags': '', 'url': 'homework3.html'}]};