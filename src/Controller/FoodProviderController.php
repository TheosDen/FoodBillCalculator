<?php

namespace App\Controller;

use App\Entity\FoodProvider;
use App\Form\FoodProviderType;
use App\Repository\FoodProviderRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/food/provider")
 */
class FoodProviderController extends AbstractController
{
    /**
     * @Route("/", name="food_provider_index", methods="GET")
     * @param FoodProviderRepository $repository
     * @return JsonResponse
     */
    public function index(FoodProviderRepository $repository): JsonResponse
    {
        return $this->json($repository->findAll(), Response::HTTP_OK, [], ['attributes' => ['id', 'name']]);
    }

    /**
     * @Route("/{id}", name="food_provider_show", methods="GET")
     * @param FoodProvider $foodProvider
     * @return JsonResponse
     */
    public function show(FoodProvider $foodProvider): JsonResponse
    {
        return $this->json($foodProvider, Response::HTTP_OK, [], ['attributes' => ['id', 'name']]);
    }
}
