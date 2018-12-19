<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FoodCategoryRepository")
 */
class FoodCategory
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("default")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("default")
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity="FoodProvider", inversedBy="categories")
     * @ORM\JoinColumn(name="provider_id", referencedColumnName="id")
     */
    private $provider;

    /**
     * @ORM\OneToMany(targetEntity="FoodItem", mappedBy="category")
     * @var ArrayCollection
     * @Groups("default")
     */
    private $items;

    public function __construct()
    {
        $this->items = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return ArrayCollection
     */
    public function getItems(): Collection
    {
        return $this->items;
    }

    /**
     * @return FoodProvider
     */
    public function getProvider(): FoodProvider
    {
        return $this->provider;
    }

    /**
     * @param mixed $provider
     * @return FoodCategory
     */
    public function setProvider(FoodProvider $provider): self
    {
        $this->provider = $provider;
        return $this;
    }
}
