<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\RepositoryInterfaces\PersonRepositoryInterface;

class PersonController extends BaseController
{
    private $personRepository;

    public function __construct(PersonRepositoryInterface $personRepository)
    {
        parent::__construct();
        $this->personRepository = $personRepository;
    }

    /**
     * Get all persons can be query
     * @author Htoo Maung Thait
     * @since 2023-05-29
     * @return \Illuminate\Http\Response
     */
    public function getAllPerson()
    {
        try {

            $persons = $this->personRepository->allOrderByIdDesc();

            if ($persons->isEmpty()) {
                $this->setResponseInfo('no data', '', [], 'No person can be query!');
                $this->response['data'] = [];
            } else {
                $this->setResponseInfo('success', 'Get all persons can be query successfully');
                $this->response['data'] = $persons;
            }
        } catch (\Throwable $th) {
            $this->setResponseInfo('fail', '', [], '', 'server error when get all persons can be query' . $th->getMessage());
            Log::error("get all person error message : " . $th->getMessage());
        }

        return response()->json($this->response, $this->httpStatus);
    }
}
