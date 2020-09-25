package app
object MinimalApplication extends cask.MainRoutes{
  case class Thing(question: Boolean, text: String)
  object Thing{
    implicit def thingRW = upickle.default.macroRW[Thing]
  }
  var things = Seq(
    Thing(true, "Do I have to come to London?"),
    Thing(true, "Can I go to San Francisco?"),
    Thing(true, "What happened to the Fail Whale?"),
    Thing(true, "How long will it take me to learn Scala"),
    Thing(true, "Does Joanna Geary remember me at all?"),
    Thing(true, "Do you still use Ruby On Rails?"),
    Thing(true, "How big is the Boston office?"),
    Thing(true, "How many people work at Twitter now?"),
    Thing(false, "I live on a farm"),
    Thing(false, "I was one of the originators of Ruby In The Pub"),
    Thing(false, "I am good friends with science fiction writer Jeff Noon"),
    Thing(false, "I was at SXSW when Twitter blew up"),
    Thing(false, "My family are from Guernsey"),
    Thing(false, "I am training for the 2021 London Marathon"),
    Thing(false, "I am related to Beck")
  )

  @cask.get("/")
  def hello() = {
    "Hello Twitter!"
  }

  @cask.get("/dave/:state")
  def list(state: String) = {
    val filteredThings = state match{
      case "all" => things
      case "questions" => things.filter(_.question)
      case "about" => things.filter(!_.question)
    }
    upickle.default.write(filteredThings)
  }

  initialize()
}
