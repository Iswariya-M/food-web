import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface BlogItem{
  id:number;
  category:string;
  title:string;
  description:string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogItems = [
    {
      id:11,
      imageUrl: "./assets/image3.webp",
      category: "VEG",
      title: "Yummy Salmon Burgers With Slaw",
      description: "These salmon burgers are THE YUMMIEST! and made with just five ingredients. The best for a quick + easy high protein lunch or dinner.",
      ingredients: [
        '12–14 ounces cooked salmon',
        '2 eggs',
        'breadcrumbs',
        'garlic powder',
        'chopped fresh herbs',
        'lemon juice',
        'olive oil',
        'green cabbage, finely shredded',
        'plain Greek yogurt',
        'white distilled vinegar (more to taste)',
        'salt',
        'garlic powder',

 
      ],

      instructions: [
        { step: 'STEP 1', title: 'For the salmon:',text: 'Flake the salmon apart. Mix all burger ingredients together and form into 3 large or 4 medium patties. Heat olive oil over medium heat, ideally in a nonstick skillet. Fry the burgers for a few minutes on each side until golden brown and crispy. Place on a paper towel lined plate and sprinkle with salt.' },
        { step: 'STEP 2', title: 'For the slaw:',text: 'Mix all slaw ingredients together. Taste and adjust.' },
        { step: 'STEP 3', title:  'Serve:',text: 'Serve up those hot salmon burgers on a bed of creamy slaw. I top mine with a dollop of extra yogurt and a swizzle of oil and more herbs. Can’t stop me.' },
        { step: 'STEP 4',title: 'Serve: ',text:'Serve meatballs and veggies with a dollop of hummus, your whipped feta, pita wedges, and anything else you like (olives, lemon, etc.). And now DEVOUR. And repeat. And repeat. And repeat.' }
      ]

    },
    {
      id:10,
      imageUrl: "./assets/image7.jpg",
      category: "VEG",
      title: "Three Cheese Baked Gnocchi With Spinach",
      description: "You’re in for a treat with this delicious Three Cheese Baked Gnocchi! Tender gnocchi blanketed in a creamy tomato sauce, speckled with fresh spinach and bites of melty cheese. Gorgeous!",
      ingredients: [
        'olive oil',
        'quarter of an onion',
        '1 large clove garlic',
        'DeLallo Passata Tomato Purée',
        '1/2 cup broth or water',
        'torn basil',
        'mascarpone cheese',
        'teaspoon salt',
        'DeLallo Potato Gnocchi',
        'spinach',
        'mozzarella cheese slices',
        'Parmesan cheese',


 
      ],

      instructions: [
        { step: 'STEP 1', title: 'Make the sauce:',text: 'Preheat oven to 400 degrees. Heat the olive oil over medium low heat. Add the onion and garlic; sauté until translucent and fragrant. Add passata and water or broth; bring to a low simmer. Add torn basil, mascarpone, and salt. YUM.' },
        { step: 'STEP 2', title: 'Bake it up:',text: ': Add gnocchi and spinach. Stir to coat evenly with sauce. Top with mozzarella slices and a sprinkle of Parmesan. Bake for 15-20 minutes, until gooey and light golden brown on top. Serve with more basil. THE END. That’s it. You’re in heaven.' },
        { step: 'STEP 3', title:  'Serve:',text: 'Now you can serve this yummy pasta'}
      ]    
    },
    
    {
      id:1,
      imageUrl: "./assets/bimage1.jpg",
      category: "NON-VEG",
      title: "Harissa Meatballs with Whipped Feta",
      description: "These Harissa Meatballs with Whipped Feta are perfect for an easy SOS dinner! Store-bought meatballs, bell peppers, zucchini, harissa, and whipped feta all in one bowl. YUMMY!.",
      ingredients: [
        'meatballs',
        'harissa paste (it usually comes in a jar and is often sold in the “global foods” section at many grocery stores)',
        'bell peppers',
        'zucchini',
        'hummus',
        'pita',
        'feta'
      ],

      instructions: [
        { step: 'STEP 1', title: 'Part One In Sheet Pan:',text:'Preheat the oven to 425 degrees. Place the peppers on one side of a large sheet pan. Drizzle with oil and sprinkle with salt. Mix the harissa with a little bit of olive oil, lemon juice, and garlic powder until you have a nice spreadable red paste. Coat your meatballs with the sauce (you can do this by tossing the meatballs in a bowl with the sauce if they’re pre-cooked, or just brushing the meatballs directly on the sheet pan if your meatballs are raw). Add meatballs to the center of the sheet pan. Bake for 15-20 minutes.' },
        { step: 'STEP 2', title: 'Part Two In Sheet Pan',text: 'Add the zucchini to the pan with some olive oil and salt. Roast for another 10 minutes. For extra browning on everything, broil for about 5 minutes.' },
        { step: 'STEP 3', title: 'Whip That Feta:', text: 'In a food processor, chopper, or blender, whip up the feta, cream cheese, and garlic until a thick and creamy sauce forms.' },
        { step: 'STEP 4', title: 'Serve:', text:' Serve meatballs and veggies with a dollop of hummus, your whipped feta, pita wedges, and anything else you like (olives, lemon, etc.). And now DEVOUR. And repeat. And repeat. And repeat.' }
      ]

    },
    {
      id:2,
      imageUrl: "./assets/binmage2.jpg",
      category: "NON-VEG",
      title: "The Best Chicken Tinga Tacos",
      description: "These Chicken Tinga Tacos are THE BEST! Saucy, spicy, real food perfection. Naturally, being that this chicken tinga tacos recipe is from The Minimalist Kitchen cookbook, it is minimal.",
      ingredients: [
        'olive oil',
        'dried oregano',
        'chopped sweet onion',
        'chicken stock',
        'cooked chicken',
        'canned crushed fire-roasted tomatoes',
        'peppers,kosher salt and cumin',
        'corn tortillas',
        'avacodas'
      ],

      instructions: [
        { step: 'STEP 1',title: 'Sauce:', text: 'Heat a large skillet over medium. Once warm, add the oil and onion. Sauté for 4 minutes or until tender, stirring occasionally. Add in the garlic and cook for 30 seconds more. Stir in the chipotles, oregano, and cumin, and toast for 1 minute. Add in the tomatoes, stock, and salt. Bring to a simmer, and cook for 7 minutes.' },
        { step: 'STEP 2', title:'Blend:',text: 'Place the tomato mixture in a high-powered or regular blender, and blend until smooth.' },
        { step: 'STEP 3',title: 'Chicken:',text:'Return the blended sauce to the pan over low heat. Add the chicken, and cook for 5 minutes. Taste and add more salt if necessary.' },
        { step: 'STEP 4', title:'Serving:',text:'Prepare the garnishes. To assemble, top the tortillas with the chicken and garnish with the avocado slices, cilantro, red onion, and cotija. Serve with a lime wedge for squeezing' }
      ]
    },
     
    {
      id:12,
      imageUrl: "./assets/image5.png",
      category: "VEG",
      title: "Pearl Couseous Skillet",
      description: "Steamy, saucy goodness! This Couscous Skillet is packed with vibrant flavors and freshness. Pearl couscous, tomatoes, chickpeas, spices, kale, and a bunch of fresh herbs and feta on top.",

      ingredients: [
        'olive oil',
        'cumin',
        'chickpeas',
        ' diced tomatoes',
        '3/4 cups water or vegetable broth',
        '1/2 cup pearl couscous',
        '1/4 cup fresh chives',
        'mint leaves',
        'crumbled feta cheese',
        'red wine vinegar',
        'maple syrup',
        'salt and pepper', 


      ],

      instructions: [
        { step: 'STEP 1',text: 'Add the olive oil to a skillet over medium heat. Add shallots and cumin; sauté until softened, about 5 minutes. Add the chickpeas and mash gently a few times – this is optional but just creates a more interesting texture and helps it get a little bit creamy.' },
        { step: 'STEP 2',text: 'Add the diced canned tomatoes; bring to a simmer.' },
        { step: 'STEP 3',text:'Add the broth, salt, and couscous; bring to a simmer, then cover and keep on low heat for 6-8 minutes or until the couscous is soft and has absorbed most of the liquid. It should be nice and soft / chewy, like an al dente pasta.' },
        { step: 'STEP 4',text:'Finish by stirring in chives. Massage the kale with the dressing ingredients in a small bowl for a minute or two, just until tender.' },
        { step: 'STEP 5',text:'Serve couscous with a little side of the massaged kale. Top individual servings with mint leaves and feta. Creamy, chewy, comforting – it’s so good!'}

      ]
    },
    {
      id:3,
      imageUrl: "./assets/bimage3.jpg",
      category: "NON-VEG",
      title: "Ginger Chicken Meatball Sandos",
      description: "Golden brown chicken meatballs cozied up next to fixings like cucumbers, shallots, kewpie mayo, mint, a bit of chili crisp, and some fresh cilantro to make the ultimate chicken sando!",
      ingredients: [
        '2 cloves garlic and olive oil',
        '1 serrano pepper, stem removed one 1-inch piece of ginger, peeled a bunch of fresh cilantro',
        '3 teaspoons fish sauce',
        '1 pound ground chicken',
        '1/2 cup mayo',
        '1 1/2 tablespoons brown sugar and 1 tablespoon cornstarch',
        'soft bread',
        'cucumber',
        'mint leaves',
        'cilantro',
        'pinch of salt'
      ],
      instructions: [
        { step: 'STEP 1', text: 'Blitz garlic, serrano pepper, a bunch of fresh cilantro, and a piece of ginger in a small chopper or food processor until minced.' },
        { step: 'STEP 2', text: 'Add mixture to a large bowl. Mix with ground chicken, fish sauce, brown sugar, cornstarch, and salt. Form into 12 meatballs – they will be wet but that’s okay. The shape doesn’t need to be perfect!' },
        { step: 'STEP 3', text: 'In a large skillet with a lid, heat oil over medium-high heat. Add the meatballs and let them begin to cook.' },
        { step: 'STEP 4', text: 'Add 2 tablespoons water; it will sizzle, so wear an apron and have your lid ready! Put the lid on the pan and let the meatballs cook for a few minutes. Uncover, flip, and repeat. Within about 10 minutes, the meatballs should be cooked through, tender, and nicely golden brown.' },
        { step: 'STEP 5', text: 'To serve, warm the bread so it’s nice and soft. Shmear with mayo, top with meatballs, sliced cucumber, sliced shallot, cilantro and mint, and a drizzle of chili crisp. Messy, saucy, and mind-blowingly delicious.' },
      ]
    
    },
    {
      id:4,
      imageUrl: "./assets/bimage4.jpg",
      category: "NON-VEG",
      title: "Crispy Chicken Tikka Bowls with Mint Sauce",
      description: "Bringing you these addicting Chicken Tikka Bowls! Crispy bits of chicken tenders, crispy cucumbers, and briny pickled onions, all on a bed of fluffy quinoa with a swoop of cool mint sauce on top. You absolutely cannot go wrong with these bowls.",
      ingredients: [
        'crispy breaded chicken',
        'tikka masala sauce',
        'cooked quinoa',
        'sliced or diced cucumbers',
        'pickled red onion',
        'slaw',
        'fresh mint',
        'fresh cilantro',
        'mayo or plain Greek yogurt',
        'salt',
        'lime'
      ],
      
      instructions: [
        { step: 'STEP 1', text: 'Cook the chicken according to package directions. Brush with sauce and return to oven for an additional 5 minutes.' },
        { step: 'STEP 2', text: 'While the chicken is cooking, prep all your other elements.' },
        { step: 'STEP 3', text: 'For the mint sauce, blend or pulse the ingredients through a food processor to make a smooth-ish sauce.' },
        { step: 'STEP 4', text: 'Serve bowls with quinoa, slaw, cucumbers, pickled red onions, and sauce over the top.' }
      ]
      

    },
    {
      id:14,
      imageUrl: "./assets/image4.jpg",
      category: "VEG",
      title: "Sopa Tarasca with Jalapeno Corn Fritters",
      description: "Let’s make Sopa Tarasca! It’s a creamy, silky Mexican-inspired soup made with pinto beans, warm chili spices, and whole tomatoes. And you NEED a big pile of the jalapeño corn fritters on top. Drooling over this one!",
      ingredients: [
        'olive oil',
        'onion',
        'ancho chili powder',
        'cumin',
        '4 cloves garlic',
        'whole tomatoes',
        'frozen corn',
        'flour',
        'cornstarch',
        'minced jalapeño',
        'cotija cheese',
        'salt',
        'water or vegetable broth',
        'vegetable oil'
      ],
      
      instructions: [
        { step: 'STEP 1', text: 'Heat olive oil over medium high heat. Add onion and garlic; sauté until soft and fragrant. Add ancho chili powder and cumin; sauté for 1-2 minutes. Add tomatoes; simmer for 15 minutes. Transfer mixture to a blender and blend until smooth. Return to pot. ' },
        { step: 'STEP 2', text: 'Add pinto beans to blender; puree with water or broth. Return to pot and stir it into the tomato mixture. Simmer over low heat until ready to serve.' },
        { step: 'STEP 3', text: 'For the corn fritters, pulse 1 cup of the corn in a food processor until smooth-ish. Mix your pureed corn with the flour, cornstarch, Cotija, jalapeño, and salt. Add in remaining 3/4 cup corn. Pour several cups of oil into a skillet for frying. Heat over medium heat. When the oil is hot, add the corn batter in small rolled balls – about 1-2 tablespoons per fritter (a cookie dough scoop works well for this). Fry until golden on both sides. Remove from the oil and drain on paper towels.' },
        { step: 'STEP 4', text: 'Serve soup topped with corn fritters, crema, Cotija cheese, cilantro, and anything else your heart is asking for. YUM.' }
      ]
      
    },
    {
      id:5,
      imageUrl: "./assets/bimage5.jpg",
      category: "NON-VEG",
      title: "Ginger Peanut Chicken with Coconut Rice",
      description: "Juicy, quick-marinated, Ginger Peanut Chicken on a bed of THE MOST LUSH coconut jasmine rice, with speckles of crunchy peanuts, bright fresh cilantro, and lime squeezes.",
      ingredients: [
        '1 1/4 pounds chicken thighs',
        '1-inch piece of ginger',
        '3 green onions',
        'zest and juice of 1-2 limes',
        '2 tablespoons brown sugar',
        '1 1/2 teaspoons salt',
        '1 tablespoon olive oil or avocado oil',
        '2–3 cloves garlic',
        '1/2 cup chopped roasted peanuts',
        '1/2 cup chopped cilantro',
        'spinach, bok choy, etc.',
        '2 cups white or jasmine rice',
        '1 1/2 cups water',
        '1 can coconut milk',
        'pinch of salt'
      ],
      
      instructions: [
        { step: 'STEP 1', text: 'Marinate Chicken: Mix chicken with ginger, green onions, lime zest, brown sugar, salt, and oil. Marinate for 20 minutes to 2 hours.' },
        { step: 'STEP 2', text: 'Rice: Add rice ingredients to an Instant Pot. Cook on high pressure for 3 minutes, followed by a natural pressure release for 10-15 minutes. Fluff with a fork.' },
        { step: 'STEP 3', text: 'Cook Chicken: Heat a skillet to medium-high. Add marinated chicken, let it caramelize. Add peanuts and garlic. Finish by adding cilantro, green onion, and spinach. Squeeze lime juice into the pan.' },
        { step: 'STEP 4', text: 'Serve over coconut rice.' }
      ]
      
    
    },
    {
      id:8,
      imageUrl: "./assets/image9.jpg",
      category: "DESSERT",
      title: "Pumpkin Caramel Monkey Bread",
      description: "Soft, buttery bites coated in gooey pumpkin caramel sauce and a drizzle of white chocolate. My family loves this pumpkin caramel monkey bread!.",
      ingredients: [
        'unsalted butter',
        'loosely packed brown sugar',
        'heavy cream',
        'canned pumpkin',
        'vanilla',
        'kosher salt',
        'cinnamon',
        'granulated sugar',
        'chocolate chips',
        'coconut oil'
      ],

      instructions: [
        { step: 'STEP 1',title: 'Make the Caramel:', text: 'Melt butter in a small saucepan. Add brown sugar, heavy cream, pumpkin, vanilla, and salt. Whisk until smooth. Bring to a low simmer and let it bubble gently until it’s incorporated and slightly thickened, 3-5 minutes (you don’t want to overcook it or it will get too thick). Remove from heat. ' },
        { step: 'STEP 2', title:'Prep the Dough:',text: ' Preheat the oven to 350 degrees. Cut the biscuits into 6 even pieces (half, then into thirds). Toss the biscuit pieces with cinnamon and sugar. Transfer to a round 9-inch cake pan or baking dish.' },
        { step: 'STEP 3',title: 'Assemble: ',text:'Pour most of the pumpkin caramel over the biscuits until mostly covered. Set aside the remaining 1/4 to 1/2 cup caramel for topping.' },
        { step: 'STEP 4', title:'Bake:',text:' Bake for 20 minutes. Remove from the oven, let rest for just 2-3 minutes and then invert onto a serving plate.' },
        { step: 'STEP 5',title:'Optional Topping:',text: 'Melt the white chocolate and coconut oil in the microwave in 15 second increments, stirring in between. Once melted, drizzle over the monkey bread. Drizzle with reserved pumpkin caramel (optional). Serve warm.'}
      ]
    },
    {
      id:6,
      imageUrl: "./assets/bimage6.jpg",
      category: "NON-VEG",
      title: "Coconut Lime Grilled Chicken and Rice",
      description: "Grilled marinated chicken, fluffy rice, and excessive handfuls of mint and cilantro, finished off with a generous drizzling of big and flavorful creamy coconut lime sauce.",
      ingredients: [
        'juice and zest of 2-3 limes',
        '2 tablespoons fish sauce',
        '1/4 cup full fat coconut milk',
        '1 tablespoon brown sugar',
        '1 tablespoon lemongrass paste',
        'half a jalapeño pepper',
        '1 clove garlic',
        'small bundle of fresh cilantro',
        'small bundle of fresh mint',
        'boneless skinless chicken thighs',
        '1 1/2 cups rice, uncooked'
      ],
      
      instructions: [
        { step: 'STEP 1', text: 'Sauce: Pulse all sauce ingredients together in a food processor until smooth.' },
        { step: 'STEP 2', text: 'Chicken: Pour about half of the sauce over the chicken and allow to marinate for 30 minutes.' },
        { step: 'STEP 3', text: 'Chicken: Preheat a grill or grill pan to medium-high heat. Cook the chicken on both sides until browned and fully cooked, about 4 minutes per side. Allow to rest for a few minutes.' },
        { step: 'STEP 4', text: 'To finish, serve grilled chicken with rice and vegetables, and drizzle with remaining sauce.' }
      ]
      
      
    
    },
    {
      id:7,
      imageUrl: "./assets/image1.jpg",
      category: "SOUP",
      title: "Chicken Orzo Tomato Soup",
      description: "This soup is the perfect ode to fall! Chicken meets orzo in an almost tomato soup form plus lots of bread dips, of course. Let’s go!.",
      ingredients: [
        '2 cloves garlic and olive oil',
        '1 serrano pepper, stem removed one 1-inch piece of ginger, peeled a bunch of fresh cilantro',
        '3 teaspoons fish sauce',
        '1 pound ground chicken',
        '1/2 cup mayo',
        '1 1/2 tablespoons brown sugar and 1 tablespoon cornstarch',
        'soft bread',
        'cucumber',
        'mint leaves',
        'cilantro',
        'pinch of salt'
      ],
      instructions: [
        { step: 'STEP 1', text: 'Blitz garlic, serrano pepper, a bunch of fresh cilantro, and a piece of ginger in a small chopper or food processor until minced.' },
        { step: 'STEP 2', text: 'Add mixture to a large bowl. Mix with ground chicken, fish sauce, brown sugar, cornstarch, and salt. Form into 12 meatballs – they will be wet but that’s okay. The shape doesn’t need to be perfect!' },
        { step: 'STEP 3', text: 'In a large skillet with a lid, heat oil over medium-high heat. Add the meatballs and let them begin to cook.' },
        { step: 'STEP 4', text: 'Add 2 tablespoons water; it will sizzle, so wear an apron and have your lid ready! Put the lid on the pan and let the meatballs cook for a few minutes. Uncover, flip, and repeat. Within about 10 minutes, the meatballs should be cooked through, tender, and nicely golden brown.' },
        { step: 'STEP 5', text: 'To serve, warm the bread so it’s nice and soft. Shmear with mayo, top with meatballs, sliced cucumber, sliced shallot, cilantro and mint, and a drizzle of chili crisp. Messy, saucy, and mind-blowingly delicious.' },
      ]
    },
    
    
    
    {
      id:9,
      imageUrl: "./assets/image2.png",
      category: "VEG",
      title: "Liz's Bistro Salad",
      description: "Crunchy, light, bright, and ultra-fresh. This French-inspired bistro salad is an absolute star as a side for nearly any dinner. Tender greens, fresh herbs, pickled onions, and a delicate vinaigrette on top.",
      ingredients: [
        'red onion',
        'white or red wine vinegar',
        'water',
        'salt and sugar',
        'romaine heart',
        'butter lettuce',
        'tarragon',
        'fresh dill and  chives',
        'dijon mustard or mayo '
      ],

      instructions: [
        { step: 'STEP 1',title: 'Pickled Onions:', text: 'Place the onions in a jar; fill the jar about a third of the way with vinegar, then fill to the top of the onions with water. Add salt and sugar, shake, and keep in the fridge for a few hours or a few days. (I’d suggest 30 minutes minimum if you’re short on time.) ' },
        { step: 'STEP 2', title:'Vinaigrette:',text: 'Shake all dressing ingredients in a jar. It should be pleasantly bright and mellow – remember we’ll be adding a bunch of onions and herbs to the salad, so it’s okay for this dressing to be pretty chill. Keep this in the fridge if making ahead.' },
        { step: 'STEP 3',title: 'Salad: ',text:' Prep all your salad greens – chop the romaine and the herbs, and gently tear the lettuce leaves into bite sized pieces.' },
        { step: 'STEP 4', title:'Toss:',text:'  Just before serving, toss greens, herbs, pickled onions, and dressing together – starting with about half of the dressing that’s in the jar, and adding more as necessary.' },
        { step: 'STEP 5',title:'Serve:',text: ' Taste and adjust; add salt and pepper to taste. It’s tender, bright, a little puckery, and so fresh. I love it.'}
      ]
    },
   
    {
      id:13,
      imageUrl: "./assets/image8.jpg",
      category: "NON-VEG",
      title: "Instant Pot Italian Beef Sandwiches",
      description: "Instant Pot Italian Beef! Just a few minutes to prep and totally hands-off to make. Tender shredded beef, crusty buttered bread, melted provolone, salty tangy giardiniera, and some broth to dunk it all in.",
      ingredients: [
        'beef chuck roast',
        '3 cloves garlic',
        'half an onion,',
        'dried oregano and basil',
        'onion powder and garlic powder',
        'paprika',
        'black pepper',
        'beef broth',
        'hoagie or sandwich rolls',
        'salt',
        'giardiniera',
        ' DeLallo Giardiniera',
        'provolone cheese'
      ],
      
      instructions: [
        { step: 'STEP 1', text: 'Combine all ingredients in the Instant Pot. Cook on high pressure for about 60 minutes. Natural pressure release for 10-20 minutes.' },
        { step: 'STEP 2', text: 'Shred the beef (it should fall apart very easily when pulled with a fork). Save the broth / juices in the Instant Pot. ' },
        { step: 'STEP 3', text: 'Layer each side of your bun with a slice of Provolone and place under the broiler until melty. Top with the beef and giardiniera.' },
        { step: 'STEP 4', text: 'Serve the hot sandwiches with a little dipping bowl of the broth so you can dunk your sandwich in and experience true soppy, cheesy, crusty, tangy Italian beef sandwich bliss.' }
      ]
    },
   
    {
      id:15,
      imageUrl: "./assets/image6.jpg",
      category: "DESSERT",
      title: "Cream Cheese Danishes",
      description: "Everything about these cream cheese danishes will bring holiday joy to your kitchen! Twirls of crescent dough layered with cream cheese and baked with a pool of strawberry jam.",
      ingredients: [
        'refrigerated crescent rolls',
        'cream cheese',
        'granulated sugar',
        'jam or fruit spread',
        '1 egg + 1 tablespoon milk (for egg wash)',
        'powdered sugar',
        'melted salted butter',
        'vanilla extract',
        'fresh cranberries',
        'water'
      ],

      instructions: [
        { step: 'STEP 1',title: 'Make the sugared cranberries: ', text: 'Boil 1/2 cup water with 1/2 cup sugar for 3-4 minutes. Add washed and dried cranberries to the pot; stir to combine. Transfer to a parchment-lined tray and let cool for one hour (to make them sticky and not overly wet). Once cool and sticky, toss with the remaining 3/4 cup sugar to coat. ' },
        { step: 'STEP 2', title:'Make the cream cheese danishes: ',text: ' Preheat the oven to 375 degrees. Unroll the croissant dough out into one flat piece, and place on a clean work surface. Use a rolling pin to roll it out and press the seams together. You want to make a solid rectangle that is just a bit bigger than the original shape.' },
        { step: 'STEP 3',text:'Using a butter knife, spread the cream cheese evenly over the croissant dough. Sprinkle with sugar.' },
        { step: 'STEP 4',text:'Cut the dough into 4 long strips. Fold each strip in half (so the cream cheese isn’t getting all over your hands) and then twist each strip into a long rope. Roll the rope into a spiral to make the shape of the danish. Transfer to a parchment-lined baking sheet.' },
        { step: 'STEP 5',text: 'Mix the egg and milk to make an egg wash. Brush each danish with egg wash and dollop each danish with 1-2 tablespoons of the jam. Bake for 10 minutes; increase temperature to 400 and bake for 3-5 more minutes to get desired browning.'},
        { step: 'STEP 6', title:'Finish and glaze: ',text: ' Remove from oven and let cool. While cooling, whisk the glaze ingredients together.' },
        { step: 'STEP 7',text:'Top each danish with a few sugared cranberries (see notes below) and drizzle with glaze. I really (like, really) enjoy eating these warm. The cream cheese layer, the jammy goodness, the tart crunch from the cranberries… oof. So good!' }
      ]
    },

    
  ];

 



  getBlogItems(): Observable<any[]> {
    return of(this.blogItems);
  }

  getBlogItemById(id: number): Observable<any> {
    const blogItem = this.blogItems.find(item => item.id === id);
    return of(blogItem);
  }

  getItemsByCategory(category: string): Observable<BlogItem[]> {
    const filteredItems = this.blogItems.filter(item => item.category.toLowerCase() === category.toLowerCase());
    return of(filteredItems);
  }

  constructor() { }
}
