const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;
const Post = require("../../src/db/models").Post;
const Flair = require("../../src/db/models").Flair;

describe("Flair", () => {

  beforeEach((done) => {
    this.topic;
    this.post;
    this.flair;
    sequelize.sync({force: true}).then((res) => {
      Topic.create({
        title: "Expeditions to Alpha Centauri",
        description: "A compilation of reports from recent visits to the star system."
      })
      .then((topic) => {
        this.topic = topic;
        Post.create({
          title: "My first visit to Proxima Centauri b",
          body: "I saw some rocks.",
          topicId: this.topic.id
        })
        .then((post) => {
          this.post = post;
          Flair.create({
            name: "My first flair",
            color: "Red",
            postId: this.post.id
          done();
        })
        .then((flair) => {
          this.flair = flair;
          done();
        });
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });
   });
  });

  describe("#create()", () => {

     it("should create a flair object with a name, color, and assigned post", (done) => {

       Flair.create({
         name: "My second flair",
         color: "Green",
         postId: this.post.id
       })
       .then((flair) => {
         expect(flair.name).toBe("My second flair");
         expect(flair.color).toBe("Green");
         done();
       })
       .catch((err) => {
         console.log(err);
         done();
       });

     });

  });


});
