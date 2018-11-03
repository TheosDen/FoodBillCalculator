<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixture extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $user = new User();

        $user->setEmail('theos.den@gmail.com');

        $user->setRoles([]);

        $user->setPassword('$argon2i$v=19$m=1024,t=2,p=2$R1hMME1oMVJoWXN5T1VpZg$2yPlpOJYG3C8Ozd2wa4kjX1R2E6Zass3XRyuT4wkS/k');

        $manager->persist($user);

        $manager->flush();
    }
}
