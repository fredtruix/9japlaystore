const Header = () => {
  document.querySelector("#header").innerHTML = `
     <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="de-flex sm-pt10">
                            <div class="de-flex-col">
                                <div class="de-flex-col">
                                    <!-- logo begin -->
                                    <div id="logo">
                                        <a href="03_grey-index.html">
                                            <img alt="" src="images/logo-lite.png" width="40" />
                                        </a>
                                    </div>
                                    <!-- logo close -->
                                </div>
                                <div class="de-flex-col">
                                    <input id="quick_search" class="xs-hide style-2" name="quick_search" placeholder="search item here..." type="text" />
                                </div>
                            </div>
                            <div class="de-flex-col header-col-mid">
                                <!-- mainmenu begin -->
                                <ul id="mainmenu">
                                    <li>
                                        <a href="index.html">Home<span></span></a>
                                    </li>
                                    <li>
                                        <a href="03_grey-explore.html">Explore<span></span></a>
                                        <ul>
                                            <li><a href="03_grey-explore-2.html">Explore</a></li>
                                            <li><a href="03_grey-collection.html">Collections</a></li>
                                            <li><a href="03_grey-item-details.html">Item Details</a></li>
                                            <li><a href="03_grey-help-center.html">Help Center</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="03_grey-author.html">Author<span></span></a>
                                        <ul>
                                            <li><a href="03_grey-author.html">Author</a></li>
                                            <li><a href="03_grey-profile.html">Profile</a></li>
                                            <li><a href="03_grey-create-options.html">Create</a></li>
                                        </ul>
                                    </li>                                    
                                    <li>
                                        <a href="#">Stats<span></span></a>
                                        <ul>
                                            <li><a href="03_grey-activity.html">Activity</a></li>
                                            <li><a href="03_grey-rankings.html">Rankings</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <!-- mainmenu close -->
                                <div class="menu_side_area">
                                    <a href="03_grey-wallet.html" class="btn-main btn-wallet"><i class="icon_wallet_alt"></i><span>Connect Wallet</span></a>
                                    <span id="menu-btn"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
};

Header();
