<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FoodItemRepository")
 */
class FoodItem
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2)
     */
    private $price;

    /**
     * @ORM\Column(type="integer")
     */
    private $weight;

    /**
     * @ORM\ManyToOne(targetEntity="FoodProvider", inversedBy="items")
     */
    private $provider;

    /**
     * @ORM\ManyToOne(targetEntity="FoodCategory", inversedBy="items")
     * @var FoodCategory
     */
    private $category;

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

    public function getPrice()
    {
        return $this->price;
    }

    public function setPrice($price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getWeight(): ?int
    {
        return $this->weight;
    }

    public function setWeight(int $weight): self
    {
        $this->weight = $weight;

        return $this;
    }

    /**
     * @return FoodProvider
     */
    public function getProvider(): FoodProvider
    {
        return $this->provider;
    }

    /**
     * @return FoodCategory
     */
    public function getCategory(): FoodCategory
    {
        return $this->category;
    }

    /**
     * @param FoodCategory $category
     * @return FoodItem
     */
    public function setCategory(FoodCategory $category): FoodItem
    {
        $this->category = $category;
        return $this;
    }

    /**
     * @param mixed $provider
     * @return FoodItem
     */
    public function setProvider(FoodProvider $provider): FoodItem
    {
        $this->provider = $provider;
        return $this;
    }
}
