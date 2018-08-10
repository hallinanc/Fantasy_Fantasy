# Fantasy Fantasy App

Fantasy fantasy is a fantasy league designed for TV shows. It is a game where players draft characters from a TV show onto teams. Each week they select a subgroup of their team to play in a match against another player’s chosen team. The chosen characters’ scores from each team are added together to determine that teams total points for the match. The team with the higher score wins. The teams with the most wins playoff during the last episode(s) of the season until only one team remains and is crowned the winner.

This app will allow a player of a TV show fantasy league to interact with their league’s game content. They will set up an account using an email and a password. They will be able to be a player in multiple leagues for multiple shows. They will be able to view character stats, drop and add players from their team, set their line up, and view weekly match outcomes/standings. Ideally, the initial draft should be able to occur from the app as well. Each league will have a league manager.

The app has 8 main pages which display or acquire information. Each will have a menu tab to quickly jump between them. 
1. “Change League” will allow the player to switch which League they are viewing. 
1. “My Team” will take the player to their team’s page of the currently selected league displaying the league, team name, owner name, active and benched characters as well as provide buttons to view, drop or trade those characters. 
1. “League Standings” will show the league page displaying the league’s name and manager, and a sortable chart of all the teams in the league displaying their team name, record, waiver position, points for, and points against. 
1. “Character Look Up” will take the user to a filterable and sortable list of all the characters of the show the league is currently playing. 
1. “Notifications” will take the user to a page which shows any changes to the user’s team and trade requests in reverse chronological order with timestamp of when that event occured. 
1. “Team Changes” will be identical to notifications except that it will be all notifications of all players listed in reverse chronological order. 
1. “Draft” will take the user to either the live Drafting page displaying which team’s turn it is, which round and pick the draft is on as well as every selection up until now in reverse chronological order, and the list of players still available. These last two sections can be expanded. Once the draft has been completed this tab will display each team in draft order and their selections in chronological order. 
1. “My Account” will take the user to a page which displays their username and leagues as well as have buttons to change their password, leave the league, and create a new league. All characters will have a view page which displays a picture of the character and an image of a relevant symbol, the characters status, team they are currently on(listed as waiver when on the waiver, and an add button when a free agent), total/season appearances, total/season score, Average score per appearance and a table of each week and that characters total points.

The available characters as well as their stats, teams, and league information will be held in a database which will be updated each week to reflect their performance in the most recent episode.

<img src="https://git.zipcode.rocks/hallinanc/Fantasy_Fantasy/raw/branch/master/IMG_20180627_165440055.jpg">

<a href="https://git.zipcode.rocks/hallinanc/Fantasy_Fantasy/raw/branch/master/IMG_20180627_165440055.jpg">UML</a>