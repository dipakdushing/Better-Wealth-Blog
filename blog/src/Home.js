import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      <center><b>England Vs South Africa Cricket Match</b></center>
      <br></br>
      <p style={{textAlign : "justify" }}> <strong>Ohh...</strong>Blink and you missed it, that was the feeling at the end of England’s three Test series against South Africa. Each match seemed to be played on fast forward. Test cricket for the T20 generation perhaps. No game lasted for a full three days, with the first match over by the middle of the third afternoon, denying the paying public a Saturday at Lord’s. The final Test would have been over inside two days – the first time this had happened in England since Andy Caddick skittled the West Indians at Headingly in 2000 – but for some killjoy umpiring in perfectly playable light.

One feels slightly short changed from this. It is almost like ordering a sumptuous meal in a fine dining restaurant and then being told you only have 15 minutes to eat it. There was plenty of captivating cricket played over the three contests but it went by at such a breakneck speed as to make it hard to digest it all.

The pitches were of a staggeringly poor standard, unlike the ones earlier in the summer that had seen three out of four games go deep into the final day. The media in this country react with outrage when India prepare dust bowls to suit their spinners but remain resolutely silent when English groundsmen produce endless green tops for the home side’s battery of fast medium seamers.

England will not mind, however. The new Stokes/ McCullum partnership has transformed the national side (I’m not going to use the B word) and brought joie de vivre back to a group of players for whom playing cricket had seemed to become a chore. To hear of McCullum pairing the backroom staff down to the bone and cutting short the endless hours of pointless practice has been refreshing and timely. Under previous regimes too many cooks routinely spoiled the broth.

England’s players are now enjoying playing Test cricket again. Even an old warhorse like Jimmy Anderson speaks of going to bed at night excited at the next day’s play. Stuart Broad has spoken of similar emotions. How refreshing it is to see those two centrals to England’s plans instead of shoved to the sidelines, treated as an irritation that will not go away, a barrier to the endless pursuit of youth.

South Africa made a great noise about attempting to play traditional, steady Test cricket but the brittle nature of their batting made this nearly impossible. By the end of the series Dean Elgar resembled a cricketing Theresa May, repeating the “strong and stable” mantra while all collapsed around him.  Never since the aforementioned West Indian tourists of 2000 can a much vaunted touring team have arrived with such a poor batting line up.

Given their many flaws, the tourists may have struggled to win the series regardless, but in truth they lost it on the first morning of Old Trafford, when, after catching England cold with a fine performance at Lords, they opted to fix what was not broken. Out went Marco Jansen, the left arm seamer who was surely the find of the series and in came a second spinner in Essex’s Simon Harmer. Worse still, Elgar broke the golden rule of combating Bazball (sorry, I couldn’t help myself) and batted first, allowing England to seize back a grip on the series that they never let go.

The second Test also produced one of Ben Stokes finest innings of his England career. Out went the inflexible positivity of early innings and in came a more nuanced response to the match situation. The captain took 101 balls to reach his first 50 and only then, with the bowlers worn down and batting conditions becoming easier, did he unleash the big shots on his way to a match winning hundred. Coupled with the 14 over spell bowled on a wounded knee in South Africa’s second innings, no one could accuse the skipper of not leading from the front. Whether Stokes’ knee holds up to such treatment throughout the winter and into next summer’s Ashes is another matter entirely.

Despite their regular collapses the tourists still gave us moments to savour this summer. The spells bowled by Anrich Nortje on the third afternoon at Lords and the second morning at Old Trafford were exhilarating, and in the finest traditions of South African fast bowling. The vein popping celebrations at the fall of each wicket recalled Alan Donald at his very fieriest.

Sadly, however, these moments were all too short and far between.

South Africa may still make it to next summer’s World Test Championship Final at Lords and the contest against Australia would certainly be a mouth watering one. But they will have to find more batsmen in the mould of Graeme Smith or Gary Kirsten if they are to compete away from home against the top teams. No wonder the South African board only want to play two Test series. The less this batting line up is exposed to the red ball the better.

England on the other hand, continue to go from strength to joyous strength. Whether this approach will work outside of favourable conditions remains to be seen. It is worth remembering that the only Test England batted first in this summer they conspired to lose by an innings.

Such concerns can wait for another day, though. For now, let us just enjoy the memories of the first summer played out in front of full houses for three years. The crowds turned up and Ben Stokes and his men certainly put on a show.
</p>
<br></br>
<h4>By Dipak Dushing</h4>
<br></br>
<h4>Nashik, Maharashtra</h4>

      {/* { error && <div>{ error }</div> } */}
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;
