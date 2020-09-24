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
    Thing(false, "I live on a farm")
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
