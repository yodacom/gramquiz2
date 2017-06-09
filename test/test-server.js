const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js');

const should = chai.should();
const app = server.app;
const storage = server.storage;

chai.use(chaiHttp);
chai.should();


describe('gramQuiz', () => {
  it('should return status 200', (done) => {
    chai.request(app)
    .get('/index.html')
    .end((err, res) => {
      res.should.have.status(200);
      res.should.be.html;
      done();
    });
  });

    it('return a list of persons', (done) => {
        chai.request(app)
            .get('/person')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                done();
            });
    });
  // it('should list results of quiz on GET', function(done) {
  //     chai.request(app)
  //     .get('/profile')
  //     .end(function(err, res) {
  //         res.should.have.status(200);
  //         res.should.be.json;
  //         done();
  //     });
  // });

  // it('should add user on POST', function(done) {
  //     chai.request(app)
  //     .post('/profile')
  //     .send({'name':"Bob"})
  //     .end(function(err,res) {
  //         should.equal(err, null);
  //         res.should.be.json;
  //         res.body.should.be.a ('object');
  //         res.body.should.have.property('name');
  //         res.body.should.have.property('id');
  //         res.body.name.should.be.a('string');
  //         res.body.id.should.be.a(number);
  //         res.body.name.should.equal("Bob");
  //         done();
  //     });
  // });

  // it('should edit a profile on PUT', function(done){
  //     chai.request(app)
  //     .put('/profile')
  //     .send({'name':'Robert'})
  //     .end(function(err,res){
  //         should.equal(err, null);
  //         res.should.be.json;
  //         res.body.should.be.a('object');
  //         res.body.should.have.property(name);
  //         res.body.name.should.be.a.('string');
  //         res.body.id.should.be.a('number');
  //         res.body.name.should.equal('Robert');
  //         done();
  //     });
  // });
  // it('should delete an item on DELETE', function(done){
  //     chai.request(app)
  //     .delete('/profile')
  //     .send({'name':"Robert"})
  //     .end(function(err,res){
  //         should.equal(err, null);
  //         res.should.be.json;
  //         done();
  //     });
  // });
});
