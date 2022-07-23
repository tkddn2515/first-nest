import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();
    service = module.get<MoviesService>(MoviesService);
  });

  it(`shoul be define`, () => {
    expect(service).toBeDefined();
  });

  describe("getAll()", () => {
    it("should return an array", () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    })
  })

  describe('getOne(id)', () => { 
    it("should return a movie", () => {
      service.createMovie({
        title: "TestMovie",
        genres: ["test"],
        year: 2000
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
     })
     it("should throw 404 error", () => {
      try {
        service.getOne(999);
      } catch(e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual("Movie with ID 999 not found.")
      }
     })
   }) 

   describe('deleteOne', () => { 
      it("delete a movie", () => {
        service.createMovie({
          title: "TestMovie",
          genres: ["test"],
          year: 2000
        });
        expect(service.getAll().length).toEqual(1);
        service.deleteOne(1);
        expect(service.getAll().length).toEqual(0);
      })

      it("should return a 404", () => {
        try{
          service.deleteOne(999);
        } catch(e) {
          expect(e).toBeInstanceOf(NotFoundException);
        }
      })
    })
   
});
