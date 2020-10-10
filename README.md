<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alumini of SAV</title>
    <link rel="stylesheet" href="home css.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="home js.js"></script>

</head>

<body>
    <header id="heading-div">
        <div id="heading-logo-div">
            <img src="savlogo134.png" alt="" id="heading-logo">
        </div>
        <div id="heading" style="text-align: center;">
            <h2>Alumni Relations, Simultala Awasiya Vidyalaya
            </h2>
            Simultala , Jamui , Bihar
        </div>
    </header>
    <nav id="navbar">
        <div id="menu-logo-div">
            <a href="" id="logo-link"><img src="savlogo134.png" alt="SAV"></a>
            <div class="container" onclick="slider_func(this)" id="button">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </div>
        <ul id="navs-list" style="display: flex;">
            <li class="nav-tab" id="tem"><a href=""> <i class="fa fa-home"></i> Home</a></li>
            <li class="nav-tab"><a href=""> <i class="fa fa-newspaper-o"></i> Magzine</a></li>
            <li class="nav-tab"><a href=""> <i class="fas fa-gift"></i> Donate</a></li>
            <li class="nav-tab"><a href=""> <i class="material-icons" style="font-size: 19px;">&#xe40b;</i> Gallery</a>
            </li>
            <div id="dropper-1" class="droppers">
                <button class="nav-tab drop-btns" id="drop-btn-1" onclick="show_list()"><i
                        class="fa fa-caret-square-o-right"></i> Events <i class="fa fa-angle-double-down"
                        id="arrow-1"></i></button>
                <div id="drop-list-1" class="drop-lists">
                    <a href="">Falicitation</a>
                    <a href="">Teacher's Day</a>
                    <a href="">Rock Event</a>
                </div>
            </div>
            <div id="dropper-2" class="droppers">
                <button class="nav-tab drop-btns" id="drop-btn-2" onclick="show_list2()"><i
                        class='fas fa-user-graduate'></i> Alumni Network <i class="fa fa-angle-double-down"
                        id="arrow-2"></i></button>
                <div id="drop-list-2" class="drop-lists">
                    <a href="">2010 Batch</a>
                    <a href="">2011 Batch</a>
                    <a href="">2012 Batch</a>
                    <a href="">2013 Batch</a>
                </div>
            </div>
        </ul>
        <div id="search-div">
            <input type="search" placeholder="Search">
            <button><i class="fa fa-search"></i></button>
        </div>

    </nav>
    <div id="sec-1">
        <div class="boxes" id="box-1">
            <a href="">SignUp</a>
            <a href="">Login</a>
        </div>
        <div class="boxes" id="box-2">
            <div class="slides fade" id="slide-1">
                <div class="number">1 / 5</div>
                <img src="image-1.jpg" style="width: 100%;" alt="">
            </div>

            <div class="slides fade" id="slide-2">
                <div class="number">2 / 5</div>
                <img src="image-2.jpg" style="width: 100%;" alt="">
            </div>

            <div class="slides fade" id="slide-3">
                <div class="number">3 / 5</div>
                <img src="image-3.jpg" style="width: 100%;" alt="">
            </div>

            <div class="slides fade" id="slide-4">
                <div class="number">4 / 5</div>
                <img src="image-4.jpg" style="width: 100%;" alt="">
            </div>

            <div class="slides fade" id="slide-5">
                <div class="number">5 / 5</div>
                <img src="image-5.jpg" style="width: 100%;" alt="">
            </div>
            <a id="prev" onclick="minusSlide()">&#10094;</a>
            <a id="next" onclick="plusSlide()">&#10095;</a>
            <div id="indicator">
                <span class="dot" id="dot-1"></span>
                <span class="dot" id="dot-2"></span>
                <span class="dot" id="dot-3"></span>
                <span class="dot" id="dot-4"></span>
                <span class="dot" id="dot-5"></span>
            </div>
        </div>
        <div class="boxes" id="box-3">
            <h2 style="text-align: center;">Login</h2>
            <form action="/" method="POST" id="get_data">
                <div id="email-div">
                    <label for="email">Email Address </label>
                    <input type="text" name="" id="email" placeholder="Email">
                </div>
                <div id="password-div">
                    <label for="password">Password</label>
                    <input type="text" name="" id="password" placeholder="Password">
                </div>
                <div id="check-div">
                    <input type="checkbox" name="" id="check" style="display: inline-block;">
                    <label for="check">Remember me</label><br>
                </div>
                <div id="submit-div">
                    <input type="submit" value="Log in" id="submit">
                </div>
                <p><a href="" id="forget">Forget Password ?</a></p>

            </form>
        </div>
    </div>
    <div id="sec-2">
        <div class="info" id="info-1">
            <h2 id="head-1" onclick="collapse_func1()">About</h2>
            <p id="para-1"> In the year 2000, after Jharkhand separated from Bihar and got its independent existence, realization struck that schools which were established to provide a firm ground to meritorious students like the Indira Gandhi Residential School, Hazaribagh for girls and Bihar’s pride Netarhat School have both gone under Jharkhand. Since that time itself, an urgent need has been felt to establish schools which would eliminate the vacuum created by Netarhat and Indira Gandhi Awasiya Vidyalaya. The human resource development department started working in this direction henceforth. On 12th August, 2009 some exuberant/enthusiastic alumni of Netarhat, on the initiative and invitation of Honorable Chief Minister of Bihar, Shri Nitish Kumar, came forward to help the state government by adopting roles suitable for them on the basis of their experience at Netarhat. Taking into consideration the need of the present circumstances it was accepted by general consensus that the medium of instruction would be English. On the suggestion of Shri Nitish Kumar, Hon Chief Minister of Bihar in the meeting of 29th of August, 2009 it was also decided that only one school would be opened that would be co-educational and would provide a common platform to both meritorious boys and girls to garner quality education under the guidance of qualified and experienced teachers chosen from all over the country. Under the guidance of State Government’s Human Resource Department’s Principal Secretary Shri Anjani Kumar Singh, the officials of the department started work in this direction and set the wheels in motion in a record time of less than a year. The first batch of 120 students reached Simultala on 6/7th of August, 2010 and on 9th of August, 2010, the Chief Minister of Bihar, Shri Nitish Kumar officially inaugurated Simultala Awasiya Vidyalaya and gave an effective gift/a gift full of promises for the future of Bihar.
            </p>
            <i class="plus">&#43;</i>
            <i class="minus">&#8722;</i>
        </div>
        <div class="info" id="info-2">
            <h2 onclick="collapse_func2()">Academies</h2>
            <p id="para-2">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
            <i class="plus">&#43;</i>
            <i class="minus">&#8722;</i>
        </div>
        <div class="info" id="info-3">
            <h2 onclick="collapse_func3()">Ashrams</h2>
            <p id="para-3">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
            <i class="plus">&#43;</i>
            <i class="minus">&#8722;</i>
        </div>
    </div>
</body>

</html>
