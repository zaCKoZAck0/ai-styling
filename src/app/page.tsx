import * as ai from "@/components/ai";

export default function Home() {
  return (
    <ai.div
    prompt="full page, make all items center"
    >
      <ai.div
      prompt="social media post card component black background white glow, fixed width"
      >
      <ai.p prompt="username">@zackozack</ai.p>
      <ai.p prompt="white text, with some up and down padding">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur totam numquam laboriosam excepturi omnis ut, quisquam voluptatibus culpa consequuntur ullam.
      </ai.p>
      <ai.button
      prompt="tweet button, full width"
      >
        Tweet
      </ai.button>
      </ai.div>
    </ai.div>
  );
}
