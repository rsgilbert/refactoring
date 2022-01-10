const { describe, it, beforeEach } = require('@jest/globals')
const { Scroll, CatalogRepository, CatalogItem } = require('./ref-repl-super.js');
const assert = require("assert");



describe('refactor 2', function () {
    // This second refactor includes Change Value To Reference on CatalogItem. That is,
    // we use a repository to return the same reference to a given CatalogItem found using its id. 
    let id;
    let title;
    let tags = [];
    let dateLastCleaned;
    let catalogId;
    let catalogRepo;

    beforeEach(function () {
        id = 'A1';
        title = 'my old scroll';
        tags = ['revered', 'archaic'];
        catalogId = 'Z9';
        dateLastCleaned = new Date();
        // Put date between 2 and 5 days ago so we can test revered condition
        dateLastCleaned.setDate(new Date().getDate() - 4);
        catalogRepo = new CatalogRepository([]);
        catalogRepo.add(new CatalogItem('C1', 'First item', []));
        catalogRepo.add(new CatalogItem('Z9', title, tags));
        
    });

    describe('catalog item', function () {
        it('correct id', function() {
            const scroll = new Scroll(id, dateLastCleaned, catalogId, catalogRepo);
            assert.strictEqual(scroll.id, id);
        });
        it('correct catalogId', function() {
            const scroll = new Scroll(id, dateLastCleaned, catalogId, catalogRepo);
            assert.strictEqual(scroll.catalogId, catalogId);
        });
        it('correct title', function() {
            const scroll = new Scroll(id, dateLastCleaned, catalogId, catalogRepo);
            assert.strictEqual(scroll.title, title);
        });
        it('correct hasTag', function() {
            const scroll = new Scroll(id, dateLastCleaned, catalogId, catalogRepo);
            assert(scroll.hasTag('revered'));
            assert.strictEqual(scroll.hasTag('chandiru'), false);
        });
    });

    describe('needs cleaning', function () {
        it('needs cleaning - true', function () {
            const scroll = new Scroll(id, dateLastCleaned, catalogId, catalogRepo);
            assert.strictEqual(scroll.needsCleaning(new Date()), true);
        });
        it('needs cleaning - false', function () {
            const scroll = new Scroll(id, dateLastCleaned, 'C1', catalogRepo);
            assert.strictEqual(scroll.needsCleaning(new Date()), false);
        });
        it('needs cleaning - true 2', function () {
            tags = ['archaic'];
            dateLastCleaned = new Date();
            const scroll = new Scroll(id, dateLastCleaned, catalogId, catalogRepo);
            assert.strictEqual(scroll.needsCleaning(new Date()), false);
        });
    });

    describe('days since last cleaning', function () {
        it('days', function () {
            dateLastCleaned = new Date();
            const scroll = new Scroll(id, dateLastCleaned, catalogId, catalogRepo);
            assert.strictEqual(scroll.daysSinceLastCleaning(new Date()), 0);
        });
        it('days', function () {
            dateLastCleaned = new Date();
            dateLastCleaned.setDate(new Date().getDate() - 3);
            const scroll = new Scroll(id, dateLastCleaned, catalogId, catalogRepo);
            assert.strictEqual(scroll.daysSinceLastCleaning(new Date()), 3);
        });
    });
   

});


// describe('refactor 1', function () {
//     let id;
//     let title;
//     let tags = [];
//     let dateLastCleaned;

//     beforeEach(function () {
//         id = 'A1';
//         title = 'my old scroll';
//         tags = ['revered', 'archaic'];
//         dateLastCleaned = new Date();
//         // Put date between 2 and 5 days ago so we can test revered condition
//         dateLastCleaned.setDate(new Date().getDate() - 4);
//     });

//     describe('catalog item', function () {
//         it('correct id', function() {
//             const scroll = new Scroll(id, title, tags, dateLastCleaned);
//             assert.strictEqual(scroll.id, id);
//         });
//         it('correct title', function() {
//             const scroll = new Scroll(id, title, tags, dateLastCleaned);
//             assert.strictEqual(scroll.title, title);
//         });
//         it('correct hasTag', function() {
//             const scroll = new Scroll(id, title, tags, dateLastCleaned);
//             assert(scroll.hasTag('revered'));
//             assert.strictEqual(scroll.hasTag('chandiru'), false);
//         });
//     });

//     describe('needs cleaning', function () {
//         it('needs cleaning - true', function () {
//             const scroll = new Scroll(id, title, tags, dateLastCleaned);
//             assert.strictEqual(scroll.needsCleaning(new Date()), true);
//         });
//         it('needs cleaning - false', function () {
//             tags = ['archaic'];
//             const scroll = new Scroll(id, title, tags, dateLastCleaned);
//             assert.strictEqual(scroll.needsCleaning(new Date()), false);
//         });
//         it('needs cleaning - true 2', function () {
//             tags = ['archaic'];
//             dateLastCleaned = new Date();
//             const scroll = new Scroll(id, title, tags, dateLastCleaned);
//             assert.strictEqual(scroll.needsCleaning(new Date()), false);
//         });
//     });

//     describe('days since last cleaning', function () {
//         it('days', function () {
//             dateLastCleaned = new Date();
//             const scroll = new Scroll(id, title, tags, dateLastCleaned);
//             assert.strictEqual(scroll.daysSinceLastCleaning(new Date()), 0);
//         });
//         it('days', function () {
//             dateLastCleaned = new Date();
//             dateLastCleaned.setDate(new Date().getDate() - 3);
//             const scroll = new Scroll(id, title, tags, dateLastCleaned);
//             assert.strictEqual(scroll.daysSinceLastCleaning(new Date()), 3);
//         });
//     });
   

// });

