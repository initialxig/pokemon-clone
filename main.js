let enemyLife = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
let copyEnemyLife = enemyLife.splice(0, enemyLife.length);
let playerLife = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
let copyPlayerLife = playerLife.splice(0, playerLife.length);
let battleOver = false;
let disabler = true;

const pikachuMoveSet = [
	'Pikachu uses lighting!',
	'Pikachu uses thunderbolt!',
	'Kamehamehaaaaa!!',
	'Tackle attack!',
	'Scratcher!'
];

const eveeMoveSet = [ 'Evee kiss!!!', 'Fake one Puncher!', 'Evee uses burn', 'Evee uses headbut' ];

function createBattle() {
	return `
        <div class="battle-info">
            <section class="enemy-section">
                <div class="pokemon-info">
                    <div class="pokemon-info-top">
                        <p class="pokemon-name">Evee</p>
                        <p class="pokemon-lv">Lv<span class="lv-num">87</span></p>
                    </div>
                    <div class="pokemon-info-bottom">
                        <p class="hp-icon">HP</p>
                        <div class="enemy-health"></div>
                    </div>
                    
                </div>
                

                <div class="enemy-location">
                    <img id="enemy-picture" src="https://media.giphy.com/media/fYkYhw2ANU1I4/giphy.gif" alt="">
                </div>
                <img class="enemy-slash" src="https://thumbs.gfycat.com/PracticalPlumpAustralianfurseal-small.gif">
                <img class="player-slash" src="https://thumbs.gfycat.com/PracticalPlumpAustralianfurseal-small.gif">
                <div class="enemy-hit-points"></div>
                <div class='player-hit-points'></div>
            
                <div class='empty-block-enemy'>
                </div>
            </section>

            <section class="player-section">
                <div class=empty-block>
                </div>
                <div class="player-location">
                    <img id="player-picture"src="https://media.giphy.com/media/kuWN0iF9BLQKk/giphy.gif"></img>
                </div>


                <div class="pokemon-info player-info">

                    <div class="pokemon-info-top">
                        <p class="pokemon-name">Pikachu</p>
                        <p class="pokemon-lv">Lv<span class="lv-num">88</span></p>
                    </div>
                    <div class="pokemon-info-bottom">
                        <p class="hp-icon">HP</p>
                        <div class="player-health"></div>
                        <p class="player-hp-count">${copyPlayerLife.length}/15</p>
                    </div>
                </div>
            </section>
                
            
            <section class="player-hub">
                <div class="text-info">
                    <div class='action-text'>
                        <p class="text">I choose you Pickachu!</p>
                    </div>
                </div>
                <div class="menu">
                    <div class="box-top">
                        <div class="fight box">
                            <p class="action-button">FIGHT</p>
                        </div>
                        <div class="bag box">
                            <p class="action-button">BAG</p>
                        </div>
                    </div>
                    <div class="box-bottom">
                        <div class="pokemon box">
                            <p class="action-button">POKeMON</p>
                        </div>
                        <div class="run box">
                            <p class="action-button">RUN</p>
                        </div>
                    </div>
                </div>
            </section>
            

        </div>
    `;
}

function renderBattle() {
	$('.battle-stage').html(createBattle());
}

function beginBattle() {
	$('#pokeball-image').click(function() {
		console.log('you clicked the pokeball');
		$('.battle-start').hide();
		$('main').css(
			'background',
			'url("https://backgroundcheckall.com/wp-content/uploads/2017/12/pokemon-game-background-8.png") no-repeat'
		);
		$('main').css('background-size', '100% 532px');
		for (let i = 0; i < copyEnemyLife.length; i++) {
			$('.enemy-health').append('<div class="enemy-hp"></div>');
			$('.player-health').append('<div class="player-hp"></div>');
		}
		$('.battle-stage').css('display', 'block');
	});
}

function playerAttack() {
	if (!battleOver) {
		$('.fight').click(() => {
			if (disabler) {
                playerAtkanimation();
				setTimeout(() => {
                    let randomizer = copyEnemyLife.splice(0, Math.ceil(Math.random()*3))
                    $('.enemy-hit-points').html(`${randomizer.length}`);
                    $('.enemy-hit-points').css('display', 'inline-block');
                    setTimeout(() => {
                        $('.enemy-hit-points').css('display', 'none');
                    }, 2000);
                    for(let i = 0; i < randomizer.length; i++) {
                        $('div').remove('.enemy-hp');
                    }
					for (let i = 0; i < copyEnemyLife.length; i++) {
						$('.enemy-health').append('<div class="enemy-hp"></div>');
					}
				}, 2800);
				disabler = false;
				setTimeout(() => {
					disabler = true;
				}, 11500);
				enemyAttack();
			}

			if (copyEnemyLife.length === 1) {
				battleOver = true;
				console.log(`you won!`);
				renderEndBattle();
			}
		});
	}
}

function playerAtkanimation() {
    setTimeout(() => {
        $('#player-picture').attr('src', 'https://i.gifer.com/YlW9.gif');
        $('.text').html(`${pikachuMoveSet[Math.floor(Math.random() * 5)]}`);
    }, 900);

    setTimeout(() => {
        $('#player-picture').hide();
    }, 1600);

    setTimeout(() => {
        $('.enemy-slash').css('display', 'inline-block');
    }, 1800);
    setTimeout(() => {
        $('.enemy-slash').css('display', 'none');
    }, 2800);

    setTimeout(() => {
        $('#player-picture')
            .attr('src', 'https://media.giphy.com/media/kuWN0iF9BLQKk/giphy.gif')
            .show('fast', 'linear');
        $('.text').html('Evee is getting ready to attack');
    }, 3500);
}

function enemyAttack() {
	setTimeout(() => {
		$('#enemy-picture').attr('src', 'https://i.gifer.com/YlW9.gif');
		$('.text').html(`${eveeMoveSet[Math.floor(Math.random() * 4)]}`);
	}, 8000);

	setTimeout(() => {
		$('#enemy-picture').hide();
	}, 8700);

	setTimeout(() => {
		$('.player-slash').css('display', 'inline-block');
	}, 8900);

	setTimeout(() => {
		$('.player-slash').css('display', 'none');
	}, 9900);
	setTimeout(() => {
		$('#enemy-picture').attr('src', 'https://media.giphy.com/media/fYkYhw2ANU1I4/giphy.gif').show('fast', 'linear');
	}, 10600);
	setTimeout(() => {
		$('.text').html("What's our next move?");
	}, 10800);
	setTimeout(() => {
        let randomizer2 = copyPlayerLife.splice(0, Math.ceil(Math.random() * 3));
        $('.player-hit-points').html(`${randomizer2.length}`);
        $('.player-hit-points').css('display', 'inline-block');
        setTimeout(() => {
            $('.player-hit-points').css('display', 'none');
        }, 2000);
        for (let i = 0; i < randomizer2.length; i++) {
            $('div').remove('.player-hp');
        }
		for (let i = 0; i < copyPlayerLife.length; i++) {
			$('.player-health').append('<div class="player-hp"></div>');
		}
		$('.player-hp-count').html(`${copyPlayerLife.length}/15`);
	}, 9500);
}

function renderEndBattle() {
	if (battleOver) {
		$('.battle-stage').html(`
            <p class="end-result">you won the battle man!</p>
        `);
	}
}
function startGame() {
	beginBattle();
	renderBattle();
	playerAttack();
}

$(startGame);

if (typeof jquery == 'undifiend') {
	console.log('we have it on');
} else {
	console.log('its not working');
}
