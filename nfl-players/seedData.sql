COPY players(
team,
teamid,
primarykey,
last_name,
first_name,
position,
dev_traits,
jersey_number,
overall,
speed,
acceleration,
strength,
agility,
awareness,
catching,
carrying,
throw_power,
throw_accuracy,
kick_power,
kick_accuracy,
run_block,
pass_block,
tackle,
jumping,
kick_return,
injury,
stamina,
toughness,
trucking,
elusiveness,
ball_carrier_vision,
stiff_arm,
spin_move,
juke_move,
impact_blocking,
run_block_strength,
run_block_footwork,
pass_block_strength,
pass_block_footwork,
power_moves,
finesse_moves,
block_shedding,
pursuit,
play_recognition,
man_coverage,
zone_coverage,
spectacular_catch,
catch_in_traffic,
route_running,
hit_power,
press,
release,
throw_accuracy_short,
throw_accuracy_mid,
throw_accuracy_deep,
play_action,
throw_on_the_run,
height,
weight,
age,
birthdate,
years_pro,
college,
total_salary,
signing_bonus,
handedness,
portraitid
)
from '/Users/ideans/Documents/developer/projects/nfl-players/player-stats.csv' DELIMITER ',' CSV HEADER;