<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class FoodFixture extends Fixture
{
    /**
     * @var array
     */
    const ITEMS = [
        [
            'name' => 'Министроне',
            'price' => 27,
            'weight' => 0,
            'category_id' => 0
        ],[
            'name' => 'Окрошка',
            'price' => 32,
            'weight' => 0,
            'category_id' => 0
        ],[
            'name' => 'Борщ',
            'price' => 25,
            'weight' => 0,
            'category_id' => 0
        ],[
            'name' => 'Шурпа',
            'price' => 32,
            'weight' => 0,
            'category_id' => 0
        ],[
            'name' => 'Суп с фрикадельками',
            'price' => 29,
            'weight' => 0,
            'category_id' => 0
        ],[
            'name' => 'Куриный бульон',
            'price' => 27,
            'weight' => 0,
            'category_id' => 0
        ],[
            'name' => 'Тефтели в соусе',
            'price' => 32,
            'weight' => 0,
            'category_id' => 1
        ],[
            'name' => 'Свинная отбивная',
            'price' => 39,
            'weight' => 0,
            'category_id' => 1
        ],[
            'name' => 'Куриная отбивная',
            'price' => 32,
            'weight' => 0,
            'category_id' => 1
        ],[
            'name' => 'Куриный бефстроганов',
            'price' => 31,
            'weight' => 0,
            'category_id' => 1
        ],[
            'name' => 'Люля ассорти',
            'price' => 35,
            'weight' => 0,
            'category_id' => 2
        ],[
            'name' => 'Бедро на монгале',
            'price' => 32,
            'weight' => 0,
            'category_id' => 2
        ],[
            'name' => 'Куриный шашлык',
            'price' => 33,
            'weight' => 0,
            'category_id' => 2
        ],[
            'name' => 'Картофель отварной с зел.',
            'price' => 19,
            'weight' => 0,
            'category_id' => 3
        ],[
            'name' => 'Картофельное пюре',
            'price' => 19,
            'weight' => 0,
            'category_id' => 3
        ],[
            'name' => 'Каша гречневая с грибами',
            'price' => 22,
            'weight' => 0,
            'category_id' => 3
        ],[
            'name' => 'Рис с овощами',
            'price' => 22,
            'weight' => 0,
            'category_id' => 3
        ],[
            'name' => 'Овощное рагу',
            'price' => 22,
            'weight' => 0,
            'category_id' => 3
        ],[
            'name' => 'Макароны / спгетти',
            'price' => 17,
            'weight' => 0,
            'category_id' => 3
        ],[
            'name' => 'Визави',
            'price' => 23,
            'weight' => 0,
            'category_id' => 4
        ],[
            'name' => 'Изюминка',
            'price' => 24,
            'weight' => 0,
            'category_id' => 4
        ],[
            'name' => 'Винегрет',
            'price' => 18,
            'weight' => 0,
            'category_id' => 4
        ],[
            'name' => 'Весна',
            'price' => 17,
            'weight' => 0,
            'category_id' => 4
        ],[
            'name' => 'Оливье',
            'price' => 28,
            'weight' => 0,
            'category_id' => 4
        ],[
            'name' => 'Пестрый',
            'price' => 19,
            'weight' => 0,
            'category_id' => 4
        ],[
            'name' => 'Домашний',
            'price' => 25,
            'weight' => 0,
            'category_id' => 4
        ],[
            'name' => 'Глазунья',
            'price' => 27,
            'weight' => 0,
            'category_id' => 5
        ],[
            'name' => 'Омлет с ветчиной',
            'price' => 32,
            'weight' => 0,
            'category_id' => 5
        ],[
            'name' => 'Блинчики с курицей и грибами',
            'price' => 35,
            'weight' => 0,
            'category_id' => 5
        ],[
            'name' => 'Блинчики с творогом',
            'price' => 33,
            'weight' => 0,
            'category_id' => 5
        ],[
            'name' => 'Сырники со сметаной',
            'price' => 27,
            'weight' => 0,
            'category_id' => 5
        ],[
            'name' => 'Узвар',
            'price' => 12,
            'weight' => 0,
            'category_id' => 6
        ],[
            'name' => 'Морс',
            'price' => 13,
            'weight' => 0,
            'category_id' => 6
        ],[
            'name' => 'Пепси',
            'price' => 20,
            'weight' => 0,
            'category_id' => 6
        ],[
            'name' => 'Сок',
            'price' => 16,
            'weight' => 0,
            'category_id' => 6
        ],[
            'name' => 'Хлеб',
            'price' => 2,
            'weight' => 0,
            'category_id' => 7
        ],[
            'name' => 'Контейнер',
            'price' => 3,
            'weight' => 0,
            'category_id' => 7
        ],
    ];

    /**
     * @var string[]
     */
    const CATEGORIES = [
        'Первые блюда',
        'Горячие блюда',
        'Мясо на мангале',
        'Гарниры',
        'Салаты',
        'Горячие закуски',
        'Напитки',
        'Другое',
    ];


    public function load(ObjectManager $manager)
    {
        $categories = $this->loadCategories($manager);

        $provider = new \App\Entity\FoodProvider();
        $provider->setName('Holiday (12-й)');

        foreach (self::ITEMS as $data) {
            $item = new \App\Entity\FoodItem();
            $item
                ->setName($data['name'])
                ->setPrice($data['price'])
                ->setWeight($data['weight']);

            $category = $categories[self::CATEGORIES[$data['category_id']]];
            $item->setCategory($category);

            $item->setProvider($provider);

            $manager->persist($category);
            $manager->persist($item);

        }

        $manager->persist($provider);

        $manager->flush();
    }

    /**
     * @return \App\Entity\FoodCategory[]
     */
    private function loadCategories(ObjectManager $manager): array
    {
        $categories = [];

        foreach (self::CATEGORIES as $name) {
            $category = new \App\Entity\FoodCategory();
            $category->setName($name);
            $manager->persist($category);

            $categories[$name] = $category;
        }

        return $categories;
    }
}
