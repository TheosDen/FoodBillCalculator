<?php

namespace App\Repository;

use App\Entity\FoodProvider;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method FoodProvider|null find($id, $lockMode = null, $lockVersion = null)
 * @method FoodProvider|null findOneBy(array $criteria, array $orderBy = null)
 * @method FoodProvider[]    findAll()
 * @method FoodProvider[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FoodProviderRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, FoodProvider::class);
    }

//    /**
//     * @return FoodProvider[] Returns an array of FoodProvider objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?FoodProvider
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
