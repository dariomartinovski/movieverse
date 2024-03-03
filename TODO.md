# Movieverse

#### React JS web application by: Dario Martinovski
---

## 1. Project description
Introducing "Movieverse," your first and only stop for the best cinematic viewing pleasure. The web application is a online movie database, where you can view popular movies and TV shows, see their details, add them to your watchlist and open discussions about them in the comment section, all done with a visually apealing and intuitive UI.\
\
The web application consists of the following pages:

  #### 1.1 Home page
  The home page is made up from few elements, beautiful carousell from few featured movies, popular production studios, section for popular movies and top 9 movies this week and also section for popular TV shows and top 9 TV shows this week.\
  Each of the featured movies on the carousell can be opened by clicking on the "See details" button, which reveals more details about the movie, where you can also watch the trailer, add it to your watchlist and possibly leave a comment for it.\
  While hovering over the production studiou's image, you can watch it's intro.\
  Also each of the listed popular movies/TV shows is clickable, which takes you to the according details page, the same is done for the "Top 9 this week" sections.
  
  #### 1.2 Movies page
  On the movies page, you have something very similar to what you have on the home page, where popular movies and top 9 movies this week are listed. The difference here, that there is no clutter, no unnecesarry elements.
  
  #### 1.3 TV Shows page
  Something very similar can be said about the TV shows page, where you have listed the popular TV shows and top 9 TV shows this week.
  
  #### 1.4 Watchlist page
  In the watchlist page you can view your movies and TV shows that you have added to it. You can open each of them, by clicking, which would reveal more details. There's also another button here "Choose a random movie" which would make our selection much easier, because sometimes even if we have a list of good movies, we still cannot choose one.
  
  #### 1.5 Login page
  The login page is very intuitive, it has a sing in or sing up option.

  #### 1.6 Movie/Tv Show details page
  The details page has a main part where the movie title, tagline, genres, overview, rating and the poster of the chosen movie are listed. Below that you have the movie trailer and some additional details. Then there's some intresting trivia and a comment section, where you can leave a comment, like or dislike others. \
\
  <img src="https://github.com/dariomartinovski/movieverse/assets/80409852/a152dca1-c3cb-4a91-9f73-55fad892c80e" alt="Home page" style="width: 440px;">
  <img src="https://github.com/dariomartinovski/movieverse/assets/80409852/a325952f-1e8f-472a-8db8-ef2eab2ed30a" alt="Home page" style="width: 440px;">
  <img src="https://github.com/dariomartinovski/movieverse/assets/80409852/764b34a3-0a66-42c9-8c40-6c6eef1236e5" alt="Movie details page" style="width: 440px;">
  <img src="https://github.com/dariomartinovski/movieverse/assets/80409852/f824ae25-03bc-4e7f-8b5b-dbaca8de845c" alt="Movie details page" style="width: 440px;">
  <p align="center">
    <sup>few images from the web app (more at the end of the document)</sup>
  </p>
  
---

### 2. User instructions

#### 2.1 Browsing movies / TV shows
Once you open the web application, you will be greated by a featured movies carousell, which you can scroll through by dragging the mouse from left to right or the other side, or by clicking the buttons on the left or right side. You can open each of the featured movies, by clicking see details or watch trailer, which would take you to the movie details page. \
If you scroll down a bit, you can see the current popular movies listed, accompanied by the top 9 movies this week. Every one of these movies you can open by clicking on the image or title. \
Scrolling further down, you can see the current popular TV shows listed, accompanied by the top 9 TV shows this week. Every one of these TV shows can be opened. \
You can also browse movies on the movies page, and TV shows accordingly on the TV shows page.

#### 2.2 Viewing movie details
You can view the movie details foir a chosen movie, by clicking on the chosen movie poster or title, which takes you to another page showing the movie details.\
Any of the movies/TV shows listed on the home page, movies page, TV shows page and watchlist page can be opened.

#### 2.3 Sign in / sign up
Firstly you have to open the login page, you can do that by clicking on the "Login ->" button on navigation bar.\
Once there you can choose on of the options, sign in or sign up.\
If you click sign in option, you have two input fields, for your email and password.\
If you click sign up, you have two additional fields, for your name and the other for confirmation of the inputted password.\
After signing in, the "Login ->" button in the navigation bar changes to "Logout" button, which you can later use for logging out.

#### 2.4 Watchlist
After logging in, you can acess your watchlist through the "Watchlist" button in the navigation bar.
show

#### 2.4.1 Adding movies to watchlist
You can add a movie to your watchlist by clicking the "Add to watchlist" button in the movie details page(see 2.2).

#### 2.4.2 Removing movies from watchlist
You can remove movies from your watchlist, by clicking on the movie from the watchlist, which would reaveal the movie details page, there the "Add to watchlist" button will now be "Remove from watchlist" button. By clicking on it you will remove the desired movie. You can check by returning back to your watchlist.

#### 2.4.3 Chosing a random movie from watchlist
Once in the watchlist page, the application allows for a way to choose a random movie from the watchlist, by clicking on the button "Choose a random movie".\
After the application has chosen a random movie, you will be propmted to open the movie with a yes/no dialog.

#### 2.5 Commenting
Once logged in and in the movie details page, you can scroll to the bottom of the page to the comment section.

#### 2.5.1 Adding a comment
You can add a comment by filling the input field and clicking the button "Comment".

#### 2.5.2 Edit a comment
You cannot edit a comment, but you can only leave one comment per movie, so if you try adding a new comment, the old one would be replaced with the new one.

#### 2.5.3 Liking, disliking other comments
You can like and dislike comments, by clicking the thumbs up for like, or thumbs down for disliking a comment.

##
### 3. Претставување на проблемот
### 3.1 Податочни структури
Главните податочни структури во оваа апликација се класи, листи, основните податочни типови float, integer, bool, како и Unity специфичните типови како што се GameObject и Transform.
```c#
public class LogicScript : MonoBehaviour
{
    public int CurretnLives = 5;
    public int Score = 0;
    private bool GamePaused = false;
    private bool GameActive = false;

    public Text ScoreDisplay;
    public Text TotalScore;
    public Text EnemiesKilled;
    public Text HighScore;
    public Text StartScreenHighScore;

    public GameObject GameFinishedScreen;
    public GameObject gameWonScreen;
    public GameObject gameLostScreen;
    public GameObject gamePausedScreen;
    public GameObject startGameScreen;
    private bool SomethingDispalyed = false;

    public void Start() {
        PlayerPrefs.SetInt("HighScore", Math.Max(PlayerPrefs.GetInt("HighScore"), 0));
        SetKillsCounter();
        StartScreenHighScore.text = "High score: " + PlayerPrefs.GetInt("HighScore").ToString();
    }

    public void Update()
    {
        if (Input.GetKeyDown(KeyCode.Escape) && GameActive)
        {
            //pause game
            if (GamePaused)
            {
                gamePausedScreen.SetActive(false);
            }
            else
            {
                gamePausedScreen.SetActive(true);
            }
            GamePaused = !GamePaused;
        }
    }

    public void TakeDamage(int num = 1) {
        CurretnLives -= num;
        ScoreDisplay.text = CurretnLives.ToString();
    }

    public void Hit() {
        Score++;
        SetKillsCounter();
    }

    public void SetKillsCounter() {
        ScoreDisplay.text = "Score: " + Score.ToString();
    }

    public void GameOver()
    {
        if (!SomethingDispalyed)
        {
            gameLostScreen.SetActive(true);
            DisplayInfo();
            SomethingDispalyed = true;
        }
    }

    public void GameWon()
    {
        if (!SomethingDispalyed)
        {
            gameWonScreen.SetActive(true);
            DisplayInfo();
            SomethingDispalyed = true;
        }
    }

    public bool PausedGame() {
        //make game paused screen
        return GamePaused;
    }

    public void ResumeGame() {
        if (GamePaused)
        {
            gamePausedScreen.SetActive(false);
        }
        else
        {
            gamePausedScreen.SetActive(true);
        }
        GamePaused = !GamePaused;
    }

    public void DisplayInfo()
    {
        GameActive = false;
        GameFinishedScreen.SetActive(true);

        // Update high score
        PlayerPrefs.SetInt("HighScore", Math.Max(PlayerPrefs.GetInt("HighScore"), Score * 10));
        
        TotalScore.text = "Score: " + (Score * 10).ToString();
        EnemiesKilled.text = "Total enemies killed: " + Score.ToString();
        HighScore.text = "High score: " + PlayerPrefs.GetInt("HighScore").ToString();
    }

    public void RestartGame() {
        GameActive = false;
        startGameScreen.SetActive(true);
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }
}
```
Ова е кодот на LogicScript класата. \
\
Најпрво се чуваат променливи за бројот на моментални животи(5), потоа се чува променлива за поените. GamePaused променелнивата ни кажува дали играта е паузирана, додека GameActive, дали е завршена играта или не. \
Потоа чувам повеќе променливи од тип Text, кој е специфичен за Unity, и таа променлива ја добива вредноста преку drag-and-drop на соодветната Text компонента од Unity едиторот. \
Наредно се чуваат GameObject променливи, кои на сличен начин како претходната Text компонента, вредност добиваат преку drag-and-drop во Unity едиторот. Тие исто така може да добијат вредност преку код, со земање на компонентата со соодветен таг. \
\
Најпрво кога се вчитува скриптата се извршува **Start** функцијата, која се состои од три линии код. Најпрво се зачувува PlayerPref HighScore, со кој може да симулираме Highscore функционалност, таа информација се зачувува локално на нашиот компјтуер. Се користи Math max со 0, бидејќи може да не постои претходна игра. Наредните линии само менуваат text полиња соодветни, за поени и најголеми поени на почетниот екран. \
\
Функција која се извршува континуирано е методот **Update**, каде слушаме за клик на копчето *Escape* од тестатура, и ако е кликнато истото ја менуваме промелнивата GamePaused, која носи соодветни последици. 
\
**TakeDamage** е функција која ја повикуваме од друга скрипта, кога ќе настане колизија помеѓу херојот и неговите противници. Бројот на одземани животи може да се менува, default вредност е 1. \
\
**Hit** фунцијата е функција која го зголемува бројот на поени на играчот и таа се повикува кога некој куршум ќе се удри во противникот.
```c#
void OnTriggerEnter2D(Collider2D Other)
    {
        if (Other.CompareTag("Enemy"))
        {
            Destroy(Other.gameObject);
            Destroy(gameObject);
            Logic.Hit();
        }
    }
```
Вака изгледа функцијата, од каде се повикува методот Hit. OnTriggerEnter2D е специјална функција од Unity, која се повикува кога моменталниот објект ќе се судри со друг објект, и тој друг објект се наоѓа во промелнивата Collider2D Other. Со Destroy се уништува објектот со кој е направена колизија и моменталниот објект. \
\
**GameOver** функцијата е слична со **GameWon** функцијата. Најпрво во функцијата се проверува дали веќе има нешто прикажано на екран, ако има не прави ништо, а ако нема тогаш стави го објектот gameOverScreen да биде активен, кој на почетокот во UnityEditor-от беше ставен на неактивен, односно да не се гледа. Потоа само се менуваат некои текст полиња во **DisplayInfo** функцијата.

### 4. Дополнителни слики од играта
  <img src="https://github.com/dariomartinovski/ShooterHero/assets/80409852/64c1693a-6738-46b8-a5f1-328c93e29e4c" alt="Почетен екран" style="width: 440px;">
  <img src="https://github.com/dariomartinovski/ShooterHero/assets/80409852/0b4276bc-6503-4c21-b54d-1df537e1c71a" alt="Почетен екран" style="width: 440px;">
   <img src="https://github.com/dariomartinovski/ShooterHero/assets/80409852/6fc0a889-265c-4a0e-91c7-fa813b8c93c5" alt="Почетен екран" style="width: 440px;">
   <img src="https://github.com/dariomartinovski/ShooterHero/assets/80409852/f80dfd53-922a-4492-bdae-7bf95690e6f9" alt="Почетен екран" style="width: 440px;">
  <img src="https://github.com/dariomartinovski/ShooterHero/assets/80409852/903d4d0b-18f8-4d99-a44c-a78832943ad5" alt="Почетен екран" style="width: 440px;">
  <img src="https://github.com/dariomartinovski/ShooterHero/assets/80409852/5c2fa152-732d-40a9-af94-48ae6b01d0c4" alt="Почетен екран" style="width: 440px;"> 
  
---

**Целиот изворен код, како и exe датотеката се наоѓаат во branch-от master.
